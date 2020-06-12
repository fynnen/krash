import React, {useEffect, useRef} from 'react';

import FooterStyled from './styled/FooterStyled';
import RandomizeTeamControls from './RandomizeTeamControls';
import useSize from '../hooks/useSize';
import { useContentHeight } from '../context/ContentHeightContext';

export const Footer = (props) => {
	const {
		isNightMode,
    numberOfTeams,
    randomize,
    reset,
    teams,
    updateNumberOfTeams,
  } = props;

	const footerRef = useRef();
	const footerSize = useSize(footerRef);
	const contentHeight = useContentHeight();

	useEffect(() => {
    contentHeight.setFooterHeight(footerSize.height);
  }, [footerSize.height]);

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