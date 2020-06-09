import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #0d0c3b;
    color: #FFF;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    height: 100%;
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
  }

  h1 {
    font-family: 'Dosis', sans-serif;
    font-weight: 800;
    font-size: 32px;
    color: #FFF;
  }

  h2, h3, h4, h5, h6, strong {
    font-weight: 700;
  }

  button {
    cursor: pointer;
  }

  a, li {
    text-decoration: none;
  }
`;
