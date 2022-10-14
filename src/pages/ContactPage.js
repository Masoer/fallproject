import React, { useState } from "react";
import {
  DivVideo,
  SpaceText,
  SpinningVideo,
  StyledButton,
} from "./homePage/HomeStyled";
import SpinningGalaxy from "../video/SpinningGalaxy.mp4";
import {
  DivForm,
  SpaceBetween,
  StyledInput,
} from "./contactPageFiles/StyledContact";

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
        <DivForm>
          <form onSubmit={handleSubmit}>
            <SpaceText>Contact us</SpaceText>
            <SpaceBetween>
              <label htmlFor="firstname"> First name:</label>
              <br></br>
              <StyledInput type="text" id="name" required />
            </SpaceBetween>
            <SpaceBetween>
              <label htmlFor="lastname">Last name:</label>
              <br></br>
              <StyledInput type="text" id="name" required />
            </SpaceBetween>
            <SpaceBetween>
              <label htmlFor="email">Email:</label>
              <br></br>
              <StyledInput type="email" id="email" required />
            </SpaceBetween>
            <SpaceBetween>
              <label htmlFor="message">Message:</label>
              <br></br>
              <StyledInput textarea id="message" required />
            </SpaceBetween>

            <StyledButton
              onClick={() =>
                window.open(
                  "mailto:email@example.com?subject=Subject&body=Body%20goes%20here"
                )
              }
            >
              {status}
            </StyledButton>
          </form>
        </DivForm>
      </DivVideo>
    </>
  );
};

export default ContactPage;
