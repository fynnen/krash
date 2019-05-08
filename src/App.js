import React, { useState } from 'react';
import Konami from 'react-konami';

import Snow from './components/vendor/react-snow-effect/'
import Header from './components/Header';
import Krash from './components/Krash';
import KonamiAudio from './components/KonamiAudio';

import randomizer from './helpers/randomizer';
import { initialParticipants } from './initialStates';

const App = () => {
  const [participants, setParticipants] = useState(initialParticipants);
  const [teams, setTeams] = useState([]);
  const [numberOfTeams, setNumberOfTeams] = useState(3);
  const [isNightMode, setIsNightMode] = useState(false);
  const [showParticipantsInfo, setShowParticipantsInfo] = useState(true);
  const [konami, setKonami] = useState(false);

  const randomize = (sortMethod) => {
    const randomizedTeams = randomizer(numberOfTeams, participants, sortMethod);
    setTeams(randomizedTeams);
  }

  const easterEgg = () => {
    setKonami(!konami);
  }

  function toggleNightMode() {
    setIsNightMode(isNightMode === true ? false : true);
  }

  function toggleParticipantsInfo() {
    setShowParticipantsInfo(showParticipantsInfo === true ? false : true);
  }

  const reset = () => {
    setTeams({});
  };


  return (
    <div className="App">
      <Konami easterEgg={easterEgg} />
      <Header
        toggleNightMode={toggleNightMode}
        isNightMode={isNightMode}
      />
      {konami && (
        <>
          <Snow />
          <KonamiAudio />
        </>
      )}
      <Krash
        numberOfTeams={numberOfTeams}
        participants={participants}
        randomize={randomize}
        teams={teams}
        isNightMode={isNightMode}
        reset={reset}
        showParticipantsInfo={showParticipantsInfo}
        toggleParticipantsInfo={toggleParticipantsInfo}
        updateNumberOfTeams={setNumberOfTeams}
        updateParticipants={setParticipants}
      />
    </div>
  );
}

export default App;
