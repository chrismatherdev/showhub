import styled from 'styled-components';

export const FooterContainer = styled.footer`
  text-align: center;
  padding: 5rem 0;
  background-color: #1a202c;
`;

export const FooterTMDB = styled.img`
  width: 15%;
`;

export const FooterLogo = styled.h1`
  font-size: 2rem;
  @media screen and (max-width: 850px) {
    font-size: 35px;
  }
`;

export const FooterLink = styled.a`
  cursor: pointer;
`;
