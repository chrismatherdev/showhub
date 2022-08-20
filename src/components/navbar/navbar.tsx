import React from 'react';
import { NavLink, LogoLink, ShowIcon, StyledNav, StyledUl, StyledLi } from './navbar-style';
import SearchShow from '../search/search-show';
import { faClapperboard } from '@fortawesome/free-solid-svg-icons';
import { Gradient } from '../hero/hero-style';

function Navbar() {
  return (
    <>
      <StyledNav>
        <StyledUl>
          <StyledLi>
            <LogoLink to="/">
              <ShowIcon icon={faClapperboard} />
              ShowHub
            </LogoLink>
          </StyledLi>
          <StyledLi>
            <NavLink to="/">Home</NavLink>
          </StyledLi>
          <StyledLi>
            <NavLink to="/movies">Movies</NavLink>
          </StyledLi>
          <StyledLi>
            <NavLink to="/tv-series">TV Series</NavLink>
          </StyledLi>
          <SearchShow />
        </StyledUl>
      </StyledNav>
      <Gradient />
    </>
  );
}

export default Navbar;
