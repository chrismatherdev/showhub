import React from 'react';
import { useState } from 'react';
import {
  Bars,
  Nav,
  NavbarExtendedContainer,
  NavbarLinkExtended,
  NavMenu,
  NavBackground,
  NavLink,
  NavWidth25,
  NavWidth50,
  LogoLink,
  OpenLinksButton,
  StyledShowIcon,
} from './navbar-style';
import SearchShow from '../search/search-show';
import { useShow } from '../../hooks/use-show';
import { faClapperboard } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);

  const { search } = useShow();

  return (
    <NavBackground>
      <Nav>
        <NavWidth25>
          <LogoLink to="/">
            <StyledShowIcon icon={faClapperboard} />
            ShowHub
          </LogoLink>
        </NavWidth25>

        <Bars />

        <NavWidth50>
          <NavMenu>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/movies">Movies</NavLink>
            <NavLink to="/tv-series">TV Series</NavLink>
            <OpenLinksButton
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? <>&#10005;</> : <> &#8801;</>}
            </OpenLinksButton>
          </NavMenu>
        </NavWidth50>

        <NavWidth25>
          <SearchShow search={search} />
        </NavWidth25>

        {extendNavbar && (
          <NavbarExtendedContainer>
            <NavbarLinkExtended to="/">Home</NavbarLinkExtended>
            <NavbarLinkExtended to="/movies">Movies</NavbarLinkExtended>
            <NavbarLinkExtended to="/tv-series">TV Series</NavbarLinkExtended>
          </NavbarExtendedContainer>
        )}
      </Nav>
    </NavBackground>
  );
}

export default Navbar;
