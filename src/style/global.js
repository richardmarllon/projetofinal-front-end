import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`


 * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
 
 }


 body {
    background: rgba(211,226,238,0.2);
    color: #0D1B2A;
    -webkit-font-smoothing: antialiased !important;
    div#root{
      min-height: 100vh;
      
    }
    
  }

  body, input, button {
    font-family: 'Nunito', sans-serif;
    font-size: 14px;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }
  h1 {
    font-size: 2.5rem;
  }
  h3{
    font-size: 2rem;
  }
  p {
    font-size: 1.2rem;
  }

  button {
    cursor: pointer;
    outline: none;
  }
  
  a {
    text-decoration: none;
  }
`;
