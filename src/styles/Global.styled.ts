import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";


export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    margin: 0;
    font-family: 'Poppins', 'DM San', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: ${theme.colors.font};
      line-height: 1.2;
  }
  
  a {
    text-decoration: none;
    color: ${theme.colors.accent};
  }
  
  ul {
    list-style: none;
  }
  
  button {
    background-color: unset;
    border: none;
  }
  
  section {
    padding: 50px;
  }
  
  section:nth-of-type(odd) {
    background-color: ${theme.colors.primaryBg};
  }

  section:nth-of-type(even) {
    background-color: ${theme.colors.secondaryBg};
  }
  
`
