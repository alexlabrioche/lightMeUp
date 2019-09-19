import React, { useState, useEffect, useContext } from 'react';
import { LightContext } from '../context/Light.context';
import createBoard from '../helpers/createBoard';
import { crossPattern, XPattern } from '../helpers/patterns';
import Cell from './Cell';

const Board = ({ cols, rows }) => {
  const [board, setBoard] = useState(() => createBoard(rows, cols));
  const { lightenUp, gameSettings } = useContext(LightContext);
  const { level, cross } = gameSettings;
  useEffect(() => {
    if (board.every((elem) => elem.every(Boolean))) {
      lightenUp(true);
    }
    if (board.every((elem) => elem.every((e) => e === false))) {
      lightenUp(false);
    }
  }, [board, lightenUp]);

  const flipCellsAround = (coord) => {
    let [y, x] = coord.split('-').map(Number);
    const flipCell = (y, x) => {
      if (x >= 0 && x < cols && y >= 0 && y < rows) {
        board[y][x] = !board[y][x];
      }
    };
    const cellsToFlip = cross ? crossPattern(y, x) : XPattern(y, x);
    cellsToFlip.forEach((arr) => flipCell(arr[0], arr[1]));
    setBoard([...board]);
  };
  return (
    <>
      <table>
        <tbody>
          {board.map((col, rowIndex) => (
            <tr key={rowIndex}>
              {col.map((lit, colIndex) => {
                const cellCoord = `${rowIndex}-${colIndex}`;
                return (
                  <Cell
                    isHard={level === 'hard'}
                    key={cellCoord}
                    coordinates={cellCoord}
                    isLit={lit}
                    handleClick={flipCellsAround}
                  />
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Board;
