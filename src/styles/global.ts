import { createGlobalStyle } from "styled-components";
import {theme} from './theme';

 const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  box-sizing: border-box;
}

* {
  margin: 0;
  padding: 0;
  font: inherit;
}

img {
  display: block;
  max-width: 100%;
}

ul {
  list-style: none;
}

a {
  text-decoration: none;
}

body {
  min-height: 100vh;
} 
 `

export default GlobalStyle;