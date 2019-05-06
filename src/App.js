import React, { useState } from 'react';

import Header from './components/Header';
import Krash from './components/Krash';

import randomizer from './helpers/randomizer';
import { initialParticipants } from './initialStates';

const App = () => {
  const [participants, setParticipants] = useState(initialParticipants);
  const [teams, setTeams] = useState([]);
  const [numberOfTeams, setNumberOfTeams] = useState(3);
  const [isNightMode, setIsNightMode] = useState(false);
  const [showParticipantsInfo, setShowParticipantsInfo] = useState(true);

  const randomize = (sortMethod) => {
    const randomizedTeams = randomizer(numberOfTeams, participants, sortMethod);
    setTeams(randomizedTeams);
  }

  function toggleNightMode() {
    setIsNightMode(isNightMode === true ? false : true);
  }

  function toggleParticipantsInfo() {
    setShowParticipantsInfo(showParticipantsInfo === true ? false : true);
  }

  return (
    <div className="App">
      <Header
        toggleNightMode={toggleNightMode}
        isNightMode={isNightMode}
      />
      <Krash
        numberOfTeams={numberOfTeams}
        participants={participants}
        randomize={randomize}
        teams={teams}
        isNightMode={isNightMode}
        showParticipantsInfo={showParticipantsInfo}
        toggleParticipantsInfo={toggleParticipantsInfo}
        updateNumberOfTeams={setNumberOfTeams}
        updateParticipants={setParticipants}
      />
    </div>
  );
}

export default App;
