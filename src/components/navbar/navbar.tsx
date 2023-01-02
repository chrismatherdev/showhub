import React from 'react';
import { Styled as S } from './navbar-style';
import { faClapperboard } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
  return (
    <>
      <S.Header>
        <S.Nav>
          <S.UnorderedList>
            <S.ListItem>
              <S.LogoLink to="/">
                <S.Icon icon={faClapperboard} />
                ShowHub
              </S.LogoLink>
            </S.ListItem>
            <S.ListItem>
              <S.Link to="/">Home</S.Link>
            </S.ListItem>
            <S.ListItem>
              <S.Link to="/movies">Movies</S.Link>
            </S.ListItem>
            <S.ListItem>
              <S.Link to="/tv-series">TV Series</S.Link>
            </S.ListItem>
          </S.UnorderedList>
        </S.Nav>
      </S.Header>
    </>
  );
}

export default Navbar;
