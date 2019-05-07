import React from 'react';

import HeaderStyled from './styled/HeaderStyled';
import ToggleNightMode from './ToggleNightMode';

export const Header = (props) => {
  const {
    isNightMode,
    toggleNightMode,
  } = props; 
  
  return (
    <HeaderStyled
      className="App-header"
      isNightMode={isNightMode}
    >
      <h1>KrAsH</h1>
      <ToggleNightMode
        isNightMode={isNightMode}
        toggleNightMode={toggleNightMode}
      />
    </HeaderStyled>
  )
};

export default Header;