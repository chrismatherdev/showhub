import React from 'react';
import { HeroSection, HeroText, HeroHeader } from './hero-style';

function Hero() {
  return (
    <>
      <HeroSection>
        <HeroText>Welcome to ShowHub</HeroText>
        <HeroHeader>Discover movies and TV Series</HeroHeader>
        <HeroText>View a wide variety of shows including trending, popular and top rated.</HeroText>
      </HeroSection>
    </>
  );
}

export default Hero;
