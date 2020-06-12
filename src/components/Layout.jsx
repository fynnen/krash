import React, { useEffect, useState } from 'react';

import Konami from 'react-konami';

import Snow from './vendor/react-snow-effect';
import Footer from './Footer';
import Header from './Header';
import Krash from './Krash';
import KonamiAudio from './KonamiAudio';

import randomizer from '../helpers/randomizer';
import { initialParticipants } from '../initialStates';
import { useContentHeight } from '../context/ContentHeightContext';

export const Layout = (props) => {
	const [participants, setParticipants] = useState(initialParticipants);
  const [teams, setTeams] = useState([]);
  const [numberOfTeams, setNumberOfTeams] = useState(3);
  const [viewportHeight, setViewportHeight] = useState(600);
  const [isNightMode, setIsNightMode] = useState(false);
  const [showParticipantsInfo, setShowParticipantsInfo] = useState(true);
	const [konami, setKonami] = useState(false);

	const contentHeight = useContentHeight();

  const handleOnResize = () => {
		setViewportHeight(window.innerHeight);
	}

  useEffect(() => {
    handleOnResize();
    window.addEventListener('resize', handleOnResize);

    return () => {
      window.removeEventListener('resize', handleOnResize);
    };
  }, []);

  const randomize = sortMethod => {
    const randomizedTeams = randomizer(numberOfTeams, participants, sortMethod);
    setTeams(randomizedTeams);
  };

  const easterEgg = () => {
    setKonami(!konami);
  };

  const toggleNightMode = () => {
    setIsNightMode(!isNightMode);
  };

  const toggleParticipantsInfo = () => {
    setShowParticipantsInfo(!showParticipantsInfo);
  };

  const reset = () => {
    setTeams({});
	};

	console.group('In Layout');
	console.log('viewportHeight : ', viewportHeight);
	console.log('contentHeight.footerHeight : ', contentHeight.footerHeight);
	console.log('contentHeight.headerHeight : ', contentHeight.headerHeight);
	console.groupEnd();

  return (
		<>
		<Konami easterEgg={easterEgg} />
			<Header toggleNightMode={toggleNightMode} isNightMode={isNightMode} />
			{konami && (
				<>
					<Snow />
					<KonamiAudio />
				</>
			)}
			<Krash
				participants={participants}
				teams={teams}
				//bodyHeight={viewportHeight - (footerHeight + headerHeight)}
				contentHeight={viewportHeight - (contentHeight.footerHeight + contentHeight.headerHeight)}
				isNightMode={isNightMode}
				showParticipantsInfo={showParticipantsInfo}
				toggleParticipantsInfo={toggleParticipantsInfo}
			/>
			<Footer
				numberOfTeams={numberOfTeams}
				teams={teams}
				reset={reset}
				randomize={randomize}
				updateNumberOfTeams={setNumberOfTeams}
				updateParticipants={setParticipants}
			/>
		</>
  )
};

export default Footer;