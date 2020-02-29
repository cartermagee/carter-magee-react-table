import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  body {
    background: #c850c0;
    background: linear-gradient(45deg, #4158d0, #c850c0);
    color: #fff;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Roboto", "Oxygen",
      "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  input:focus{
    outline: none;
  }
`;

export default GlobalStyles
