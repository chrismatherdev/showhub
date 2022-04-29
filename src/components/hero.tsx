import React from 'react';
import '../index.css';
import { HeroSectionStyle, HeroContainer } from './styles/hero-style';

function Hero() {
  return (
    <HeroSectionStyle>
      <HeroContainer>
        <div className="hero-image">
          <img src={'../../docs/Web_Banner_869133.jpg'} alt="hero" />
        </div>
      </HeroContainer>
    </HeroSectionStyle>
  );
}

export default Hero;
