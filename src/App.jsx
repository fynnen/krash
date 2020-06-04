import React, { useState, useRef, useEffect } from 'react';
import Konami from 'react-konami';

import Snow from './components/vendor/react-snow-effect';
import Footer from './components/Footer';
import Header from './components/Header';
import Krash from './components/Krash';
import KonamiAudio from './components/KonamiAudio';

import randomizer from './helpers/randomizer';
import { initialParticipants } from './initialStates';

const App = () => {
  const [participants, setParticipants] = useState(initialParticipants);
  const [teams, setTeams] = useState([]);
  const [numberOfTeams, setNumberOfTeams] = useState(3);
  const [footerHeight, setfooterHeight] = useState(0);
  const [headerHeight, setHeaderHeight] = useState(0);
  const [viewportHeight, setViewportHeight] = useState(600);
  const [isNightMode, setIsNightMode] = useState(false);
  const [showParticipantsInfo, setShowParticipantsInfo] = useState(true);
  const [konami, setKonami] = useState(false);
  const footerRef = useRef();
  const headerRef = useRef();


  const handleOnResize = () => {
		recalculateHeights();
	}

	const recalculateHeights = () => {
		setViewportHeight(window.innerHeight);
		setfooterHeight(footerRef.current.clientHeight);
		setHeaderHeight(headerRef.current.clientHeight);
	}

  useEffect(() => {
    if(footerRef && footerRef.current) setfooterHeight(footerRef.current.clientHeight);
  }, [footerRef]);

  useEffect(() => {
    if(headerRef && headerRef.current) setHeaderHeight(headerRef.current.clientHeight);
  }, [headerRef]);

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

  return (
    <div className="App">
      <Konami easterEgg={easterEgg} />
      <Header toggleNightMode={toggleNightMode} isNightMode={isNightMode} headerRef={headerRef} />
      {konami && (
        <>
          <Snow />
          <KonamiAudio />
        </>
      )}
      <Krash
        participants={participants}
        teams={teams}
        bodyHeight={viewportHeight - (footerHeight + headerHeight)}
        isNightMode={isNightMode}
        showParticipantsInfo={showParticipantsInfo}
        toggleParticipantsInfo={toggleParticipantsInfo}
      />
      <Footer
        footerRef={footerRef}
        numberOfTeams={numberOfTeams}
        teams={teams}
        reset={reset}
        randomize={randomize}
        updateNumberOfTeams={setNumberOfTeams}
        updateParticipants={setParticipants}
      />
    </div>
  );
};

export default App;
