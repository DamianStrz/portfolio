import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`

	html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
  	box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 20px 0 8px 40px;
    font-family: 'Cormorant SC';
  }

  button {
    padding: 0;
    cursor: pointer;
    font-family: 'Montserrat';


  }

  ul {
    padding: 0;
    margin: 0;


  }
`
export default GlobalStyles
