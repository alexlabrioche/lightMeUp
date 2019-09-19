import React, { useContext } from 'react';
import { LightContext } from '../context/Light.context';
import styled, { css } from 'styled-components';

const LightedNeon = styled.div`
  font-size: 6em;
  margin: 20px 0 20px 0;
  font-family: 'Monoton', cursive;
  color: slategray;
  transition: color 0.3s;
  ${(p) =>
    p.isOn &&
    css`
      color: #fffdd8;
      animation: lightenNeon 1.5s ease-in-out infinite alternate;
      text-shadow: 0 0 20px #ffcc00, 0 0 60px #ffcc00, 0 0 80px #ff5d00, 0 0 100px #ff5d00,
        0 0 200px #ff5d00;
    `}
`;

const Neon = () => {
  const { isLightOn } = useContext(LightContext);
  return (
    <LightedNeon isOn={isLightOn}>
      <div>{isLightOn ? 'Turn me down...' : 'Light me up!!'}</div>
    </LightedNeon>
  );
};

export default Neon;
