import React from 'react';

import FooterStyled from './styled/FooterStyled';

export const Footer = (props) => {
  const {
    isNightMode,
  } = props; 
  
  return (
    <FooterStyled
      className="App-Footer"
      isNightMode={isNightMode}
    >
      <h1>Footer</h1>
    </FooterStyled>
  )
};

export default Footer;