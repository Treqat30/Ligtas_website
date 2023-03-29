const express = require("express");
const errorHandler = require("./middleware/errorHandler");
const dotenv = require("dotenv").config();
const session = require("express-session");
const path = require("path");
const ejs = require("ejs");
const cookieParser = require("cookie-parser");
const app = express();
const bodyParser = require("body-parser");


const port = process.env.PORT || 3000;

const publicDirectoryPath = path.join(__dirname, "public");
app.use(express.static(publicDirectoryPath));
// Customize the server to serve the folder
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cookieParser())

// Parse the URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: false }));
// Parse JSON bodies (as sent by API clients). Provide a parser which helps to pass the data stream from the client to the server
app.use(express.json());
// app.use as middleware
app.use(errorHandler);
app.use(
  session({
    secret: "webslesson",
    resave: true,
    saveUninitialized: true,
  })
);

//setting view engine to ejs
app.set("view engine", "ejs");
app.set('views',path.join(__dirname+'/views/'))

//Define Routes
app.use("/", require("./routes/pages"));
app.use("/auth", require("./routes/auth"));
app.use("/weather", require("./routes/weather"));
app.use("/cont", require("./routes/cont")); 

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});

// //route for 404 pages
// app.get('/about-us/*', (req,res)=>{
//   res.render('404',{
//       errorMessage: "About us article not found."
//   })
// })

// app.use(session({
//     secret: 'my secret',     // a secret used to sign the session ID cookie
//     resave: true,           // whether to save the session to the store on each request
//     saveUninitialized: true, // whether to save a new, uninitialized session to the store
//     // store: new SessionStore ({/* options */}), // a session store instance
//     cookie: {
//       // session ID cookie settings
//       maxAge: 3600000,  // time-to-live of the cookie in milliseconds
//       httpOnly: true,   // whether the cookie can be accessed only by HTTP requests
//       secure: true      // whether the cookie should be sent only over HTTPS
//     }
//   }));
