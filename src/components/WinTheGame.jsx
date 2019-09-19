import React from 'react';
import { Box } from 'grommet';
import styled from 'styled-components';

const Styled = styled.div`
  display: absolute;
  height: 100vh;
  width: 100vw;
`;

const WinTheGame = () => {
  return (
    <Styled>
      <Box fill background="brand">
        Gagné
      </Box>
    </Styled>
  );
};

export default WinTheGame;
