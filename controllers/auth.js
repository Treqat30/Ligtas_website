const connection = require('../database');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');


const register = (req, res) => {
    //CHECK IF THERE IS AN EXISTING USER
    const q = "SELECT * FROM users WHERE email = ?";
  
    connection.query(q, [req.body.email], (err, data) => {
      if (err) return res.status(500).json(err);
      if (data.length) return res.status(409).json("Email already exists!");
      
      // Compare password and confirmPassword fields
      //   if (req.body.password !== req.body.confirmPassword) {
      //     return res.status(400).json( "Passwords do not match" );
      //   }

      //Hash the password and create a user
      const salt = bcrypt.genSaltSync(10);
      const hash = bcrypt.hashSync(req.body.password, salt);
  
      const q = "INSERT INTO users(`name`,`email`,`password`) VALUES (?)";
      const values = [req.body.name, req.body.email, hash];
  
      connection.query(q, [values], (err, data) => {
        if (err) return res.status(500).json(err);
        return res.status(200).json("User has been registered.");
      });
    });
  };
 
const login = (req, res) => {

    //Checking if the user exists or not
    const q = "SELECT * FROM users WHERE email = ?";
  
    connection.query(q, [req.body.email], (err, data) => {
      if (err) return res.status(500).json(err);
      if (data.length === 0) return res.status(404).json("User not found!");
  
      //Checking the password
      const isPasswordCorrect = bcrypt.compareSync(
        req.body.password,
        data[0].password
      );
  
      if (!isPasswordCorrect)
        return res.status(400).json("Incorrect username or password!");
  
      const token = jwt.sign({ id: data[0].id }, "jwtkey");
      const { password, ...other } = data[0];
  
      res
        .cookie("access_token", token, {
          httpOnly: true,
        })
        .status(200)
        .json("User has been Loggen in.!");
    });
  };
  
  const logout = (req, res) => {
    res.clearCookie("access_token",{
      sameSite:"none",
      secure:true
    }).status(200).json("User has been logged out.")
  };



  module.exports = {register, login, logout};

















  

// const register = (req,res) =>{
//     console.log(req.body); // grabbing all the data that was sent in the form


//     const{name, email, password, passwordConfirm} = req.body;
//      connection.query('SELECT email from users WHERE email =?', [email], async (error, results) =>{
//         if(error){
//             console.log(error);
//         } 

//         const resultArray = Object.values(JSON.parse(JSON.stringify(results)));

//         if( resultArray .length > 0 ){
//             res.redirect(301, "/");;
//         } else if(password !== passwordConfirm){
//             res.redirect(301, "/");
//         }

//         let hashedPassword = await bcrypt.hash(password,10);
//         console.log(hashedPassword);

//         connection.query('INSERT INTO users SET ?', {name: name, email:email, password:hashedPassword}, (error, results) =>{
//             if(error){
//                 console.log(error);
//                 return;
//             } else {
//                 console.log(results);
//                 res.redirect(301, "/");
//             }
//         })
//      })
// }

// const login = async (req, res) => {
//     try {
//         const { email, password } = req.body;
//         if (!email || !password) {
//             return res.status(400).render('login', {
//                 message: "Please Provide an email and password"
//             })
//         }
//         connection.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
//             console.log(results);
//             if (!results || !await bcrypt.compare(password, results[0].password)) {
//                 res.status(401).render('login', {
//                     message: 'Email or Password is incorrect'
//                 })
//             } else {
//                 const id = results[0].id;

//                 const token = jwt.sign({ id }, process.env.JWT_SECRET, {
//                     expiresIn: process.env.JWT_EXPIRES_IN
//                 });

//                 console.log("the token is " + token);

//                 const cookieOptions = {
//                     expires: new Date(
//                         Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
//                     ),
//                     httpOnly: true
//                 }
//                 res.cookie('userSave', token, cookieOptions);
//                 res.status(200).redirect("/");
//             }
//         })
//     } catch (err) {
//         console.log(err);
//     }
// }

// // const isLoggedIn = async (req, res, next) => {
// //     if (req.cookies.userSave) {
// //         try {
// //             // 1. Verify the token
// //             const decoded = await promisify(jwt.verify)(req.cookies.userSave,
// //                 process.env.JWT_SECRET
// //             );
// //             console.log(decoded);

// //             // 2. Check if the user still exist
// //             connection.query('SELECT * FROM users WHERE id = ?', [decoded.id], (err, results) => {
// //                 console.log(results);
// //                 if (!results) {
// //                     return next();
// //                 }
// //                 req.user = results[0];
// //                 return next();
// //             });
// //         } catch (err) {
// //             console.log(err)
// //             return next();
// //         }
// //     } else {
// //         next();
// //     }
// // }
// const logout = (req, res) => {
//     res.cookie('userSave', 'logout', {
//         expires: new Date(Date.now() + 2 * 1000),
//         httpOnly: true
//     });
//     res.status(200).redirect("/");
// }


// const login = async (req,res) =>{
//     console.log(req.body); // grabbing all the data that was sent in the form
//     res.send("user login")
// }








