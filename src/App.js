import React, { Component, useState, useRef } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>KrAsH</h1>
        </header>
      </div>
    );
  }
}

export default App;


const getTeams = (participants, sortMethod) => {

  return [];
}

const Krash = () => {
  const [participants, setParticipants] = useState([]);
  const [sortMethod, setSortMethod] = useState(null);
  const teams = getTeams(participants, sortMethod);
  const saveParticipants = (participants, sortMethod) => {
    setParticipants(participants);
    setSortMethod(sortMethod);
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
  const participants = null; //remplacer par les valeurs de ref
  const sortMethod = null; //remplacer par les valeurs de ref
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
      <button
        onClick={() => save(participants, sortMethod)}
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
