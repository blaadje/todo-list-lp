import styled, { createGlobalStyle } from "styled-components"
import bluebackground from "./images/bluebackground.svg"

const size = {
  tablet: "580px",
  desktop: "1200px",
}

export const device = {
  tablet: `only screen and (min-width: ${size.tablet})`,
  desktop: `only screen and (min-width: ${size.desktop})`,
}

export const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
    height: 100%;
    font-family: "ubuntu";
    opacity: 0;
    background: url(${bluebackground});
  }

  .fonts-loaded {
    body {
      transition: opacity 0.7s ease;
      opacity: 1;
    }
  }

  button {
    font-size: 15px;
    border-radius: 10px;
    border: none;
    padding: 16px 40px;
    font-weight: 300;
  }

  p {
    line-height: 150%;
  }

  * {
    box-sizing: border-box;
  }
`

export const Container = styled.div`
  margin: 0 auto;
  width: 100%;
  max-width: 100%;
  padding: 0 40px;
  @media ${device.desktop} {
    padding: 0;
    max-width: 1200px;
  }
`
