import React from 'react';

import FooterStyled from './styled/FooterStyled';
import RandomizeTeamControls from './RandomizeTeamControls';

export const Footer = (props) => {
  const {
    footerRef,
    isNightMode,
    numberOfTeams,
    randomize,
    reset,
    teams,
    updateNumberOfTeams,
  } = props;

  return (
    <FooterStyled
      className="App-Footer"
      isNightMode={isNightMode}
      ref={footerRef}
    >
      {teams.length > 0 ?
        (<button className="reset" onClick={reset}>Reset</button>)
        :
        <RandomizeTeamControls
          isNightMode={isNightMode}
          numberOfTeams={numberOfTeams}
          randomize={randomize}
          updateNumberOfTeams={updateNumberOfTeams}
        />
        }
    </FooterStyled>
  )
};

export default Footer;