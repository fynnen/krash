import React, { Component, useState, useRef } from 'react';
import './App.css';
import randomDataSet from './datasets/dataset-randomizer.json';
import { ParticipantsList } from './components/participantsList';
import { ParticipantStyled } from './components/Participant';
import randomizer from './helpers/randomizer';
import { BaseStyles, Themes } from './helpers/styles';
import { SORTMETHODS } from './constants';
import { initialParticipants } from './initialStates';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      persons: initialParticipants,
      teams: [],
      numberOfTeams: 3,
    }

    this.randomize = this.randomize.bind(this);
    this.updateNumberOfTeams = this.updateNumberOfTeams.bind(this);
  }

  updateNumberOfTeams(numberOfTeams) {
    this.setState({ numberOfTeams });
  }

  randomize(sortMethod) {
    const teams = randomizer(this.state.numberOfTeams, this.state.persons, sortMethod);

    this.setState({ teams }, () => console.log(this.state.teams));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>KrAsH</h1>
          <Krash randomize={this.randomize} teams={this.state.teams} updateNumberOfTeams={this.updateNumberOfTeams} numberOfTeams={this.state.numberOfTeams} />
        </header>
      </div>
    );
  }
}

export default App;


const Krash = (props) => {
  const [participants, setParticipants] = useState(initialParticipants);
  const [sortMethod, setSortMethod] = useState(null);
  const [numberOfTeams, setNumberOfTeams] = useState(null);

  const saveParticipants = (numberOfTeamsInput, participantsInput, sortMethodInput) => {
    setParticipants(participantsInput);
    setSortMethod(sortMethodInput);
    setNumberOfTeams(numberOfTeamsInput);
  }

  const { teams, randomize, updateNumberOfTeams, numberOfTeams: numberOfTeamss } = props;
  return (
    <div>
      <Themes theme={"night"} /> 
      <BaseStyles /> 
      <ParticipantsList randomize={randomize} participants={participants} updateNumberOfTeams={updateNumberOfTeams} numberOfTeams={numberOfTeamss} />
      <TeamsPanel teams={teams} />
    </div>
  )
}

const ParticipantsInput = (props) => {
  const { save } = props;
  const participantsRef = useRef(null);
  const sortMethodRef = useRef(null);
  const numberOfTeamsRef = useRef(null);
  const participants = null; //remplacer par les valeurs de ref
  const sortMethod = null; //remplacer par les valeurs de ref
  const numberOfTeams = null; //remplace par les valeurs de ref
  return (
    <>
      <textarea
        id="participants"
        ref={participantsRef}
        placeholder="Liste des participants"
      />
      <select ref={sortMethodRef}>
        <option value={SORTMETHODS.Random}>Aleatoire</option>
        <option value={SORTMETHODS.Mixed}>Melanger</option>
        <option value={SORTMETHODS.Splitted}>Par lieu</option>
      </select>
      <input 
        type="number"
        placeholder="Nombre d'equipes"
        ref={numberOfTeamsRef} />
      <button
        onClick={() => save(numberOfTeams, participants, sortMethod)}
        value="Sauvegarder"
      >
        Sauvegarder
      </button>
    </>
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
              return <ParticipantStyled participant={participant} />
            })}
          </ul>
          <hr />
        </>
      ))
    }
   </>
  )
}


