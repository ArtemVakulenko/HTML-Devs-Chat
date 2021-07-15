import { createGlobalStyle } from 'styled-components';

export const StGlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: ${({ colors, theme }) => colors[theme].color};
    font-family: 'Roboto', sans-serif;
  }
  body {
    height: ${window.innerHeight}px;
    background: ${({ colors, theme }) => colors[theme].main};
    direction: ${({ lang }) => (lang === 'ar' ? 'rtl' : 'ltr')};
    overflow: hidden;
  }
  #root{
    height: 100vh;
  }
  a{
    text-decoration: none;
  }
`;
