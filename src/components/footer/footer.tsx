import React from 'react';
import { FooterContainer, FooterTMDB, FooterLogo, FooterLink } from './footer.style';
import { Gradient } from '../hero/hero-style';

function Footer() {
  return (
    <>
      <Gradient />
      <FooterContainer>
        <FooterLogo>ShowHub</FooterLogo>
        <FooterLink
          target="_blank"
          href="https://developers.themoviedb.org/3/getting-started/introduction"
        >
          <FooterTMDB src={'../../assets/tmdb_logo.svg'} alt="TMDB Logo"></FooterTMDB>
        </FooterLink>
      </FooterContainer>
    </>
  );
}

export default Footer;
