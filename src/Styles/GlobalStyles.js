import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyles = createGlobalStyle`
  ${reset};
  ul,
  ol {
    list-style: none;
  }
  a,
  a:visited {
    text-decoration: none;
  }
  *:focus {
    outline: none;
  }
  button {
    border: none;
    outline: none;
    text-shadow: none;
    background: none;
    cursor: pointer;
  }
  * {
    box-sizing: border-box;
    font: inherit;
  }
  body {
    @import url('https://fonts.googleapis.com/css2?family=Ubuntu:ital,wght@0,300;0,400;0,500;0,700;1,300;1,400;1,500;1,700&display=swap');
    font-family: 'Ubuntu', sans-serif;
    background-color: white;
  }
`;
export default GlobalStyles;
