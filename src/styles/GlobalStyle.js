import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        
        letter-spacing: 1px;
        font-family: 'Courier New', Courier;
        
        font-size: 1.3vw;
        

      box-sizing: border-box;
       margin: 0;
       padding: 0;
    

        @media only screen and (max-width: 40em) {
          font-size: 5vw;
          
        }
    };
    body {
        background: black;
    }
    h1 {
      color: white;
    }
  
   
    

`;

export default GlobalStyle;
