import * as styled from 'styled-components';

export default styled.createGlobalStyle`
  html {
    box-sizing: border-box;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  body {
    padding: 0;
    margin: 0;
    font-family: Oxygen, 'sans serif';
    background-color: white;
    color: black;
    font-size: 1rem;
  }

  h1,
  h2,
  h3 {
    margin: 0;
  }
`;
