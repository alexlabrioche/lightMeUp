import React, { useContext } from 'react';
import { LightContext } from '../../context/Light.context';
import { Button, RadioButtonGroup, CheckBox, Box } from 'grommet';
import { Gamepad } from 'grommet-icons';
import PatternExample from './PatternExample';

const Menu = () => {
  const { gameSettings, setGameSettings, toggleMenu, isLightOn } = useContext(LightContext);
  console.info(gameSettings);
  const { level, cross } = gameSettings;
  return (
    <Box fill align="center" justify="center" direction="row">
      <Box fill background={!isLightOn && 'night'} align="center" justify="evenly" direction="row">
        <RadioButtonGroup
          name="level"
          options={[
            {
              value: 'easy',
              label: 'Facile',
            },
            {
              value: 'medium',
              label: 'Moyen',
            },
            {
              value: 'hard',
              label: 'Impossible !',
            },
          ]}
          value={level}
          onChange={(e) => setGameSettings({ ...gameSettings, level: e.target.value })}
        />
        <Box align="center">
          <PatternExample cross={cross} />
          <CheckBox
            checked={cross}
            onChange={(e) => setGameSettings((state) => ({ ...state, cross: !state.cross }))}
          />
        </Box>
      </Box>
      <Box fill background={!isLightOn && 'night'} align="center" justify="center">
        <Button onClick={() => toggleMenu(false)} label="C'est parti !" icon={<Gamepad />} />
      </Box>
    </Box>
  );
};

export default Menu;
