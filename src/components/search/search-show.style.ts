import styled from 'styled-components';

export const Input = styled.input`
  font-size: 13px;
  padding: 12px;
  outline: none;
  color: white;
  font-weight: bold;
  border-radius: 20px;
  background-color: transparent;
  border: 2px solid darkgrey;
  width: 100%;
`;

export const SearchWrapper = styled.div`
  width: 250px;
  margin: 10px auto;
`;

export const SearchButton = styled.div`
  top: 0;
  right: 0;
  background: #7690da;
  z-index: 1;
  cursor: pointer;
`;
export const SearchBox = styled.div`
  position: relative;
`;

export const SearchButtonTest = styled.button`
  position: absolute;
  right: 5px;
  padding: 5px;
  display: flex;
  border-radius: 2px;
  align-items: center;
  justify-content: center;
  top: 5px;
  color: white;
  background-color: inherit;
  border: 2px solid darkgrey;
  border-radius: 20px;
  cursor: pointer;
`;
