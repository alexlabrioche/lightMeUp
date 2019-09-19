import React, { createContext, useState } from 'react';

export const LightContext = createContext();

const LightProvider = ({ children }) => {
  const [isLightOn, lightenUp] = useState(false);
  const [isMenuOpen, toggleMenu] = useState(true);
  const [gameSettings, setGameSettings] = useState({ level: 'easy', cross: true });
  return (
    <LightContext.Provider
      value={{ isLightOn, lightenUp, isMenuOpen, toggleMenu, gameSettings, setGameSettings }}
    >
      {children}
    </LightContext.Provider>
  );
};

export default LightProvider;
