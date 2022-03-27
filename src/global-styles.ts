import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
    --maxWidth: 1280px;
    --backgroundColor: #1a202c;
    --white: #fff;
    --fontXL: 2.5rem;
    --fontLarge: 1.5rem;
    --fontMedium: 1.2rem;
    --fontSmall: 1rem;
}

* {
    font-family: system-ui, sans-serif;
  box-sizing: border-box;
}

body {
    margin: 0;
    padding: 0;
}

`;
