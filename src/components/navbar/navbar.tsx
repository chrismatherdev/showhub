import React from 'react';
import {
  NavLink,
  LogoLink,
  ShowIcon,
  StyledNav,
  StyledUl,
  StyledHeader,
  StyledLi,
} from './navbar-style';
import { faClapperboard } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <>
      <StyledHeader>
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
          </StyledUl>
        </StyledNav>
      </StyledHeader>
    </>
  );
}

export default Navbar;
