import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
 
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;

    --webkit-font-smoothing: antialiased;
  }
  :root {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
  }
  
 
  ul {
    list-style: none;
  }
  a {
    text-decoration: none;
  }

`