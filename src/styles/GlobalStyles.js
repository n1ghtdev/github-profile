import { createGlobalStyle } from 'styled-components';
import theme from './theme';

const globalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }
  *::after,
  *::before {
    box-sizing: inherit;
  }
  html,
  body,
  #root {
    height: 100%;
  }
  body {
    background-color: ${theme.background};
    color: ${theme.text};
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default globalStyles;
