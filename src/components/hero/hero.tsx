import React from 'react';
import { Styled as S } from './hero-style';

function Hero() {
  return (
    <>
      <S.Hero>
        <S.Text>Welcome to ShowHub</S.Text>
        <S.Header>Discover movies and TV Series</S.Header>
        <S.Text>View a wide variety of shows including trending, popular and top rated.</S.Text>
      </S.Hero>
    </>
  );
}

export default Hero;
