import { createGlobalStyle } from 'styled-components';
import themeColors from './themeColors';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  body {
    background-color: ${themeColors.white};
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
  }

  *, ::after, ::before {
    box-sizing: inherit;
  }
`;

export default GlobalStyle;
