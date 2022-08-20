import styled from 'styled-components';

export const Gradient = styled.div`
  background: linear-gradient(
    90deg,
    rgba(9, 9, 121, 1) 0%,
    rgba(2, 0, 36, 1) 37%,
    rgba(0, 212, 255, 1) 62%
  );
  height: 2px;
`;

export const HeroSection = styled.section`
  padding: 4rem 1rem 7rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
`;

export const HeroText = styled.p`
  font-size: 1rem;
  line-height: 1.5;
`;

export const HeroHeader = styled.h2`
  font-size: 3rem;
`;
