import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        
        letter-spacing: 1px;
        font-family: 'Courier New', Courier;
        font-size: 1.3vw;
    

        @media only screen and (max-width: 40em) {
          font-size: 5vw;
        }
    };
    body {
        
    }
  
   
    

`;

export default GlobalStyle;
