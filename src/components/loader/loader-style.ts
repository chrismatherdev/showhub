import styled from 'styled-components';

export const Styled = {
  Loader: styled.svg`
    animation: rotate 1s linear infinite;
    margin: auto;
    width: 50px;
    flex: 1;
    color: blue;
    height: 50px;
    display: block;
    margin: auto;

    & .path {
      stroke: #5652bf;
      stroke-linecap: round;
      animation: dash 1.5s ease-in-out infinite;
    }

    @keyframes rotate {
      100% {
        transform: rotate(360deg);
      }
    }
    @keyframes dash {
      0% {
        stroke-dasharray: 1, 150;
        stroke-dashoffset: 0;
      }
      50% {
        stroke-dasharray: 90, 150;
        stroke-dashoffset: -35;
      }
      100% {
        stroke-dasharray: 90, 150;
        stroke-dashoffset: -124;
      }
    }
  `,

  Container: styled.div`
    display: flex;
    align-items: center;
    background-color: #1a202c;
    height: 100vh;
  `,
};
