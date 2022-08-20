import styled from 'styled-components';

export const Input = styled.input`
  font-size: 13px;
  padding: 12px;
  outline: none;
  color: black;
  width: 275px;
  font-weight: bold;
  border-radius: 20px;
  background-color: transparent;
  border: 2px solid black;
  @media screen and (max-width: 850px) {
    align-items: center;
  }
`;

export const SearchWrapper = styled.div`
  margin: 10px auto;
  display: flex;
`;

export const SearchButton = styled.button`
  top: 0;
  right: 0;
  background: #7690da;
  z-index: 1;
  position: absolute;
  margin: 5px;
  cursor: pointer;
  color: white;
  font-weight: bold;
  background-color: darkgrey;
  border-radius: 15px;
  padding: 8px;
  &:hover {
    background-color: #2d3748;
  }
`;

export const SearchBox = styled.div`
  position: relative;
  display: inline-flex;
`;
