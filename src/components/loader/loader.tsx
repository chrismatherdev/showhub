import React from 'react';
import { Styled as S } from './loader-style';

function Loader() {
  return (
    <S.Container>
      <S.Loader viewBox="0 0 50 50">
        <circle className="path" cx="25" cy="25" r="20" fill="none" strokeWidth="2" />
      </S.Loader>
    </S.Container>
  );
}

export default Loader;
