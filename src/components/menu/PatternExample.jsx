import React, { useState, useEffect } from 'react';
import styled, { css } from 'styled-components';

const MiniCell = styled.td`
  height: 1.5rem;
  width: 1.5rem;
  background: #494946;
  transition: background 0.5s ease-in-out;
  ${(p) =>
    p.isLit &&
    css`
      background: #fff6ea;
    `};
`;

const PatternExemple = ({ cross }) => {
  const [board, setBoard] = useState([]);
  useEffect(() => {
    if (cross) {
      return setBoard([[false, true, false], [true, true, true], [false, true, false]]);
    }
    return setBoard([[true, false, true], [false, true, false], [true, false, true]]);
  }, [cross]);
  return (
    <table>
      <tbody>
        {board.map((col, rowIndex) => (
          <tr key={rowIndex}>
            {col.map((lit, colIndex) => {
              return <MiniCell isLit={lit} key={colIndex} />;
            })}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default PatternExemple;
