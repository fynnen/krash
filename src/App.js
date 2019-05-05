import React, { useState } from 'react';
import './App.css';

import Header from './components/Header';
import Krash from './components/Krash';

import randomizer from './helpers/randomizer';
import { initialParticipants } from './initialStates';

const App = () => {
  const [participants, setParticipants] = useState(initialParticipants);
  const [teams, setTeams] = useState([]);
  const [numberOfTeams, setNumberOfTeams] = useState(3);
  const [isNightMode, setisNightMode] = useState(false);

  const randomize = (sortMethod) => {
    const randomizedTeams = randomizer(numberOfTeams, participants, sortMethod);
    setTeams(randomizedTeams);
  }

  function toggleNightMode() {
    setisNightMode(isNightMode === true ? false : true);
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
        updateNumberOfTeams={setNumberOfTeams}
        updateParticipants={setParticipants}
      />
    </div>
  );
}

export default App;
