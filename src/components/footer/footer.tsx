import React from 'react';
import { FooterContainer, FooterTMDB, FooterLogo } from './footer.style';

function Footer() {
  return (
    <FooterContainer>
      <FooterLogo>ShowHub</FooterLogo>
      <FooterTMDB src={'../../docs/tmdb_logo.svg'} alt="TMDB Logo"></FooterTMDB>
    </FooterContainer>
  );
}

export default Footer;
