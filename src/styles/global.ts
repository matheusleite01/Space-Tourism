import { createGlobalStyle } from "styled-components";
import { theme } from "./theme";
import image from "../assets/home/background-home-desktop.jpg";
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
  font-family: ${theme.font.family.barlowCondensed};
  font-size: ${theme.font.size.size_16px};
  font-weight: ${theme.font.fontWeight.w400};
  color: ${theme.color.colorWhite};
  letter-spacing: 2.7px;
  text-decoration: none;
}

body {
  background: url(${image.src}) no-repeat center ;
  background-size: cover;
  min-height: 100vh;
  color: ${theme.color.colorWhite};
} 
.container {
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;
}
 `;

export default GlobalStyle;
