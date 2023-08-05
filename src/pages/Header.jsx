import { styled } from 'styled-components';
import React from 'react';

export default function Header() {
  return <Wrap>Header</Wrap>;
}
const Wrap = styled.div`
  width: 100%;
  background: #c2c2c2;

  box-sizing: border-box;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;
