import React, { useState, useRef } from 'react';
import './App.css';
import { ParticipantsList } from './components/participantsList';
import { ParticipantStyled } from './components/Participant';
import randomizer from './helpers/randomizer';
import { BaseStyles, Themes } from './helpers/styles';
import { SORTMETHODS } from './constants';
import { initialParticipants } from './initialStates';

const App = () => {
  const [participants, setParticipants] = useState(initialParticipants);
  const [teams, setTeams] = useState([]);
  const [numberOfTeams, setNumberOfTeams] = useState(3);

  const randomize = (sortMethod) => {
    const randomizedTeams = randomizer(numberOfTeams, participants, sortMethod);
    setTeams(randomizedTeams);
  }

  return (
    <div className="App">
        <header className="App-header">
          <h1>KrAsH</h1>
          <Krash participants={participants} updateParticipants={setParticipants} randomize={randomize} teams={teams} updateNumberOfTeams={setNumberOfTeams} numberOfTeams={numberOfTeams} />
        </header>
      </div>
  );
}

export default App;


const Krash = (props) => {
  const { participants, updateParticipants, teams, randomize, updateNumberOfTeams, numberOfTeams } = props;
  return (
    <div>
      <Themes theme={"night"} /> 
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
  console.log('ICI:', teams);
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


