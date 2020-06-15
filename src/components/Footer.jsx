import React, {useEffect, useRef} from 'react';

import FooterStyled from './styled/FooterStyled';
import RandomizeTeamControls from './RandomizeTeamControls';
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
	const footerHeight = useRef();
	const contentHeight = useContentHeight();

	const footerSizeChangeObserver = new ResizeObserver(entries => {
		if (entries[0].target.clientHeight !== footerHeight.current) {
			footerHeight.current = entries[0].target.clientHeight;
			contentHeight.setFooterHeight(footerHeight.current);
		}
	});

	useEffect(() => {
		footerSizeChangeObserver.observe(footerRef.current);
	}, []);

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