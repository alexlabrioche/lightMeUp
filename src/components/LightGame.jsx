import React, { useContext, useState, useEffect } from 'react';
import styled, { css } from 'styled-components';
import NeonLight from './NeonLight';
import Board from './Board';
// import WinTheGame from './WinTheGame';
import Menu, { NewGame } from './menu';
import { LightContext } from '../context/Light.context';

const GameLayout = styled.div`
  height: 100vh;
  .header {
    height: 20%;
    width: 100%;
  }
  .game {
    height: 80%;
    width: 100%;
  }
  background: #12225c;
  transition: background-image 0.6s;
  ${(p) =>
    p.isLit &&
    css`
      background: #ffad3e;
    `}
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const LightGame = () => {
  const { isLightOn, isMenuOpen, gameSettings } = useContext(LightContext);
  const [showWinPanel, setWinPanel] = useState(false);
  const [dificulty, setDifficulty] = useState({ rows: 3, cols: 3 });
  useEffect(() => {
    if (gameSettings.level === 'easy') {
      setDifficulty({ rows: 3, cols: 3 });
    }
    if (gameSettings.level === 'medium') {
      setDifficulty({ rows: 5, cols: 5 });
    }
    if (gameSettings.level === 'hard') {
      setDifficulty({ rows: 7, cols: 7 });
    }
  }, [gameSettings]);
  return (
    <GameLayout isLit={isLightOn}>
      <NewGame />
      <Container className="header">
        <NeonLight />
      </Container>
      <Container className="game">
        {isMenuOpen ? <Menu /> : <Board rows={dificulty.rows} cols={dificulty.cols} />}
      </Container>
    </GameLayout>
  );
};

export default LightGame;
