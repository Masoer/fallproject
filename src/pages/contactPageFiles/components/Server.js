//First attempt:

//const express = require("express");
// const router = express.Router();
// const cors = require("cors");
// const nodemailer = require("nodemailer");

// const app = express();
// app.use(cors());
// app.use(express.json());
// app.use("/", router);
// app.listen(5000, () => console.log("Server Running"));

// const contactEmail = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "sofie.kodehode@gmail.com",
//     pass: "@HanzO80089",
//   },
// });

// contactEmail.verify((error) => {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Ready to Send");
//   }
// });

// router.post("/ContactPage", (req, res) => {
//   const name = req.body.name;
//   const email = req.body.email;
//   const message = req.body.message;
//   const mail = {
//     from: name,
//     to: "sofie.kodehode@gmail.com",
//     subject: "Contact Form Submission",
//     html: `<p>Name: ${name}</p>
//            <p>Email: ${email}</p>
//            <p>Message: ${message}</p>`,
//   };

//   contactEmail.sendMail(mail, (error) => {
//     if (error) {
//       res.json({ status: "ERROR" });
//     } else {
//       res.json({ status: "Message Sent" });
//     }
//   });
// });

//Second attempt:

// const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "sofie.kodehode@gmail.com",
//     pass: "@HanzO80089",
//   },
// });

// const mailOptions = {
//   from: name,
//   to: "sofie.kodehode@gmail.com",
//   subject: "Contact Form Submission",
//   html: `<p>Name: ${name}</p>
//            <p>Email: ${email}</p>
//            <p>Message: ${message}</p>`,
// };

// transporter.sendMail(mailOptions, function (error, info) {
//   if (error) {
//     console.log(error);
//   } else {
//     console.log("Email sent: " + info.response);
//   }
// });

//Conclusion. couldn't make it work
