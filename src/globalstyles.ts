import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  /* --- RESET --- */
  *, *::before, *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body, #root {
    height: 100%;
    scroll-behavior: smooth;
    overflow-x: hidden;
    width: 100%;
    font-family: 'Inter', sans-serif;
    background-color: #fff;
    color: #111;
  }

  button, input, textarea, select {
    font-family: inherit;
    border: none;
    outline: none;
    background: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  img {
    display: block;
    max-width: 100%;
  }
`;
