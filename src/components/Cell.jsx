import React from 'react';
import styled, { css } from 'styled-components';

const IlluminatedCell = styled.td`
  height: 5rem;
  width: 5rem;
  background: #494946;
  transition: background 0.2s ease-in-out;
  ${(p) =>
    p.isLit &&
    css`
      background: #fff6ea;
    `};
  ${(p) =>
    p.isHard &&
    css`
      height: 3rem;
      width: 3rem;
    `};
`;

const Cell = ({ isLit, isHard, coordinates, handleClick }) => {
  return <IlluminatedCell isLit={isLit} isHard={isHard} onClick={() => handleClick(coordinates)} />;
};

export default Cell;
