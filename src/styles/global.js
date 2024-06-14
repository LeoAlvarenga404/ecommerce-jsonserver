import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  :root {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
    font-family: 'Arial', sans-serif;
  }
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
  }

`