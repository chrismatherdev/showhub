import React from 'react';
import { FooterContainer, FooterTMDB, FooterLogo, FooterLink } from './footer.style';

function Footer() {
  return (
    <>
      <FooterContainer>
        <FooterLogo>ShowHub</FooterLogo>
        <FooterLink target="_blank" href="https://www.themoviedb.org/?language=en-GB">
          <FooterTMDB src={'../../assets/tmdb_logo.svg'} alt="TMDB Logo"></FooterTMDB>
        </FooterLink>
      </FooterContainer>
    </>
  );
}

export default Footer;
