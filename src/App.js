import React, { Component, useState, useRef } from 'react';
import './App.css';
import randomDataSet from './datasets/dataset-randomizer.json';
import randomizer from './helpers/randomizer';

class App extends Component {

  componentDidMount() {
    console.log(randomizer(3, randomDataSet.persons, "mixed"));
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
  const [participants, setParticipants] = useState([]);
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
      <ParticipantsInput save={saveParticipants} />
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
        <option value="0">0</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
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
