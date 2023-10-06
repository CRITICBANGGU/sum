import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body,
  h1,
  h2,
  h3,
  h4,
  p,
  figure,
  blockquote,
  dl,
  dd {
    margin: 0;
  }

  ul[role='list'],
  ol[role='list'] {
    list-style: none;
  }
  html {
    height: -webkit-fill-available;
  }

  body {
    min-height: 100vh;
    min-height: -webkit-fill-available;
    text-rendering: optimizeSpeed;
    letter-spacing :-0.5px; 
    line-height: 22px;
  }

  a:not([class]) {
    text-decoration-skip-ink: auto;
  }

  img,
  picture {
    max-width: 100%;
    display: block;
  }

  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    border: 0 solid #e5e7eb;
  }

  @media (prefers-reduced-motion: reduce) {
    html:focus-within {
      scroll-behavior: auto;
    }

    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  html {
    width: 100vw;
    overflow-x: hidden;
  }

  body::-webkit-scrollbar-thumb {
    background-color: rgba(55, 41, 44, 0.4);
  }

  body::-webkit-scrollbar-track {
    background: transparent;
  }

  body {
    font-family: Pretendard,-apple-system, BlinkMacSystemFont, system-ui,
      Roboto, 'Helvetica Neue', 'Segoe UI', 'Apple SD Gothic Neo',
      'Noto Sans KR', 'Malgun Gothic', 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol', sans-serif;
    // color: #37292c;
    // //background-attachment: fixed;
    // font-family: Pretendard;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.5;
  }

  main {
    width: 100vw;
    height: 100vh;
  }

  p,
  li {
    max-width: none;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
  .h4 {
    font-family: Maven Pro, sans-serif;
    font-size: 1.333em;
    font-weight: 600;
    line-height: 1.3;
  }
  .white-text {
    z-index: 20;
    color: #fff;
  }

  .no-margin{
    margin-bottom: 0;
  }

  .h3{
    font-family: Maven Pro,sans-serif;
    font-size: 1.777em;
    font-weight: 600;
    line-height: 1.3;
  }
  .button{
    height: 3.06em;
  color: #151d45;
  text-align: center;
  background-color: #00cc9b;
  border-radius: 40px;
  padding: 0 1.5em;
  line-height: 3.06em;
  text-decoration: none;
  }
`;

export default GlobalStyle;
