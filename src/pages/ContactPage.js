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
    let response = await fetch("http://localhost:5000/contact", {
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
        <SpinningVideo className="videoTag" autoPlay loop muted>
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

export default ContactPage;
