import styled from 'styled-components';

export const Styled = {
  Container: styled.div`
    margin: auto;
    background-color: #171923;
    padding: 8px;
  `,

  Hero: styled.section`
    padding: 5rem 1rem 5rem 4rem;
    background-color: #1a202c;
    margin: 0 auto;
  `,

  Header: styled.h2`
    font-size: 2rem;
  `,

  Grid: styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    grid-gap: 30px;
    padding: 8px;
  `,
};
