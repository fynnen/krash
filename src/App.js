import React, { useState } from 'react';
import './App.css';

import ParticipantsList from './components/participantsList';
import ParticipantStyled from './components/styled/ParticipantStyled';
import ToggleNightModeStyled from './components/styled/ToggleNightModeStyled';

import randomizer from './helpers/randomizer';
import { BaseStyles, Themes } from './helpers/globalStyles';
import { SORTMETHODS } from './constants';
import { initialParticipants } from './initialStates';

const App = () => {
  const [participants, setParticipants] = useState(initialParticipants);
  const [teams, setTeams] = useState([]);
  const [numberOfTeams, setNumberOfTeams] = useState(3);
  const [toggleState, setToggleState] = useState("day");

  const randomize = (sortMethod) => {
    const randomizedTeams = randomizer(numberOfTeams, participants, sortMethod);
    setTeams(randomizedTeams);
  }

  function toggleNightMode() {
    setToggleState(toggleState === "day" ? "night" : "day");
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>KrAsH</h1>
        <ToggleNightModeStyled toggle={toggleNightMode} />
      </header>
      <Krash
        numberOfTeams={numberOfTeams}
        participants={participants}
        randomize={randomize}
        teams={teams}
        toggleState={toggleState}
        updateNumberOfTeams={setNumberOfTeams}
        updateParticipants={setParticipants}
      />
    </div>
  );
}

export default App;


const Krash = (props) => {
  const {
    numberOfTeams,
    participants,
    randomize,
    teams,
    toggleState,
    updateNumberOfTeams,
    updateParticipants,
  } = props;

  return (
    <div className="content">
      <Themes theme={toggleState} /> 
      <BaseStyles /> 
      <ParticipantsList participants={participants} updateParticipants={updateParticipants}  />
      <RandomizeTeamControls randomize={randomize} updateNumberOfTeams={updateNumberOfTeams} numberOfTeams={numberOfTeams}/>
      <TeamsPanel teams={teams} />
    </div>
  )
}

const RandomizeTeamControls = (props) => {
  const { randomize, updateNumberOfTeams, numberOfTeams } = props;
  return (
    <div>
      <button onClick={() => randomize(SORTMETHODS.Random)}>Random</button>
      <button onClick={() => randomize(SORTMETHODS.Mixed)}>Mixed</button>
      <button onClick={() => randomize(SORTMETHODS.Splitted)}>Splitted</button>
      <input type="number" onChange={(e) => updateNumberOfTeams(e.target.value)} defaultValue={numberOfTeams}></input>
    </div>
  );

}

const TeamsPanel = (props) => {
  const { teams } = props;
  return (
    <>
    {
      teams.map((team, i) => (
        <>
          <h3>{team.name}</h3>
          <ul>
            {team.persons.map((participant, i) => {
              return <ParticipantStyled key={i} participant={participant} />
            })}
          </ul>
          <hr />
        </>
      ))
    }
   </>
  )
}
