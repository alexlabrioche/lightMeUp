import React, { useContext } from 'react';
import { Button } from 'grommet';
import { Info } from 'grommet-icons';
import styled from 'styled-components';
import { LightContext } from '../../context/Light.context';

const Styled = styled.div`
  position: absolute;
`;

const NewGame = () => {
  const { toggleMenu } = useContext(LightContext);
  return (
    <Styled>
      <Button onClick={() => toggleMenu(true)} icon={<Info />} />
    </Styled>
  );
};

export default NewGame;
