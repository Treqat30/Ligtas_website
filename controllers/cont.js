
const nodemailer =require('nodemailer');

  // create reusable transporter object using the default SMTP transport
const send = async (req, res) => {

    const from = req.body.name;
    const message = req.body.message;
    const email =req.body.email;

    const output = `
    <p>You have a new contact request</p>
    <h3>Contact Details</h3>
    <ul>  
      <li>Name: ${from}</li>
      <li>Email: ${email}</li>
    </ul>
    <h3>Message</h3>
    <p>${req.body.message}</p>
  `;

  let transporter = nodemailer.createTransport({
    host: 'mail.ligtas.tech',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: 'info@ligtas.tech', // generated ethereal user
        pass: 'Ligtassystem2023'  // generated ethereal password
    },
    tls:{
      rejectUnauthorized:false
    }
  });
 
  // setup email data with unicode symbols
  let mailOptions = {
      from: '"Nodemailer Contact" <info@ligtas.tech>', // sender address
      to: 'tylercacao8152001@gmail.com', // list of receivers
      subject: 'New Message', // Subject line
      html: output // html body
  };

  // send mail with defined transport object
  await transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
          return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);   
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

      res.render('contact');
  });
}

module.exports ={send};

// const send = async (req,res) =>{
//     console.log(req.body.name); // grabbing all the data that was sent in the form
//     res.send("Message Sent")
// }