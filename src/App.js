import React, { Component, useState, useRef } from 'react';
import './App.css';
import { ParticipantsList } from './components/ParticipantsList';
import randomDataSet from './datasets/dataset-randomizer.json';
import randomizer from './helpers/randomizer';
import { BaseStyles, Themes } from './helpers/styles';
import { SORTMETHODS } from './constants';
import { initialParticipants } from './initialStates';

class App extends Component {

  componentDidMount() {
    console.log(randomizer(3, randomDataSet.persons, SORTMETHODS.Splitted));
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>KrAsH</h1>
          <Krash />
        </header>
      </div>
    );
  }
}

export default App;


const Krash = () => {
  const [participants, setParticipants] = useState(initialParticipants);
  const [sortMethod, setSortMethod] = useState(null);
  const [numberOfTeams, setNumberOfTeams] = useState(null);
  const teams = null; // randomizer(numberOfTeams, participants, sortMethod);

  const saveParticipants = (numberOfTeamsInput, participantsInput, sortMethodInput) => {
    setParticipants(participantsInput);
    setSortMethod(sortMethodInput);
    setNumberOfTeams(numberOfTeamsInput);
  }
  return (
    <div>
      <Themes theme={"night"} /> 
      <BaseStyles /> 
      <ParticipantsList participants={participants} />
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
  return(
    <div>
      Placeholder pour remz le meilleur
    </div>
  )
}
