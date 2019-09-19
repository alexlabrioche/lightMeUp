import React from 'react';
import LightProvider from './context/Light.context';
import LightGame from './components/LightGame';
import { Grommet } from 'grommet';

const theme = {
  global: {
    colors: {
      brand: '#2D51C6',
      day: '#ffad3e',
      night: '#12225c',
    },
  },
};

const App = () => {
  return (
    <LightProvider>
      <Grommet full theme={theme}>
        <LightGame />
      </Grommet>
    </LightProvider>
  );
};

export default App;
