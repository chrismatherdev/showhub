import React from 'react';
import * as S from './footer.style';

function Footer() {
  return (
    <>
      <S.FooterContainer>
        <S.FooterLogo>ShowHub</S.FooterLogo>
        <S.FooterLink target="_blank" href="https://www.themoviedb.org/?language=en-GB">
          <S.FooterTMDB src={'../../assets/tmdb_logo.svg'} alt="TMDB Logo"></S.FooterTMDB>
        </S.FooterLink>
      </S.FooterContainer>
    </>
  );
}

export default Footer;
