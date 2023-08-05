import React from 'react';
import { styled } from 'styled-components';
export default function Side() {
  return <Wrap>Side</Wrap>;
}

const Wrap = styled.div`
  width: 100%;
  box-sizing: border-box;
  border: 1px solid red;
`;
