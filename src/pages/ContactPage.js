import React, { useState } from "react";
import {
  DivText,
  DivVideo,
  SpaceText,
  SpinningVideo,
  StyledButton,
} from "./homePage/HomeStyled";
import SpinningGalaxy from "../video/SpinningGalaxy.mp4";
import styled from "styled-components";

const ContactPage = () => {
  const [status, setStatus] = useState("Submit");
  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Sending...");
    const { name, email, message } = e.target.elements;
    let details = {
      name: name.value,
      email: email.value,
      message: message.value,
    };
    let response = await fetch("http://localhost:5000/ContactPage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify(details),
    });
    setStatus("Submit");
    let result = await response.json();
    alert(result.status);
  };
  return (
    <>
      <DivVideo>
        <SpinningVideo autoPlay loop muted>
          <source src={SpinningGalaxy} type="video/mp4" />
        </SpinningVideo>
        <DivText>
          <form onSubmit={handleSubmit}>
            <SpaceText>Contact us</SpaceText>
            <div>
              <label htmlFor="name">Firstname:</label>
              <br></br>
              <StyledInput type="text" id="name" required />
            </div>
            <div>
              <label htmlFor="name">Lastname:</label>
              <br></br>
              <StyledInput type="text" id="name" required />
            </div>
            <div>
              <label htmlFor="email">Email:</label>
              <br></br>
              <StyledInput type="email" id="email" required />
            </div>
            <div>
              <label htmlFor="message">Message:</label>
              <br></br>
              <StyledInput textarea id="message" required />
            </div>
            <StyledButton type="submit">{status}</StyledButton>
          </form>
        </DivText>
      </DivVideo>
    </>
  );
};

export const StyledInput = styled.input`
  color: black;
`;

// var nodemailer = require("nodemailer");

// var transporter = nodemailer.createTransport({
//   service: "gmail",
//   auth: {
//     user: "sofie.kodehode@gmail.com",
//     pass: "@HanzO80089",
//   },
// });

// var mailOptions = {
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

export default ContactPage;
