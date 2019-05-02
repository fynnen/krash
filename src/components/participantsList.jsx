import React, { useState, useRef } from 'react';
import { ParticipantStyled } from './Participant';
import { LOCATIONS, ROLES } from '../constants';
import { SORTMETHODS } from '../constants';
import Octicon, {Pencil} from '@githubprimer/octicons-react'

export const ParticipantsList = (props) => {
  const { participants, updateParticipants, randomize, updateNumberOfTeams, numberOfTeams } = props;
  const [participantInputs, setParticipantsInput] = useState(participants);
  const [editMode, setEditMode] = useState(false);
  const cancelEdit = () => {
    setEditMode(false);
  }

  const updateInput = (id, field, value) => {
    console.log(`id: ${id} //// field: ${field} //// value: ${value}`);
    let participantInput = participantInputs.find(x => x.id === id);
    if(participantInput){
      if(participantInput.hasOwnProperty(field)){
        participantInput[field] = value;
        setParticipantsInput(participantInputs);
        console.log(participantInputs);
      }
    }
  }
  const saveParticipants = () => {
    updateParticipants(participantInputs);
  }

  console.log('render', participantInputs);
  return (
    <>
      {editMode
        ? <ParticipantsEdit participantInputs={participantInputs} cancel={cancelEdit} update={updateInput} save={saveParticipants} />
        : <ParticipantsRead participants={participants} />}
      {!editMode && <button onClick={() => setEditMode(true)} value="Modifier">Modifier <Octicon icon={Pencil} ariaLabel="Add new item" /></button>}
    </>
  );
}

export const ParticipantsRead = (props) => {
  const { participants } = props;
  return (
    <ul>
      {participants.map((participant, i) => {
        return <ParticipantStyled key={participant.id} participant={participant} />
      })}
    </ul>
  )
}

export const ParticipantsEdit = (props) => {
  const { participantInputs, cancel, update, save } = props;
  console.log('participantsEdit ', participantInputs);
  return (
    <>
      <ul>
        {participantInputs.map((participantInput, i) => {
          return (
            <ParticipantEdit
              key={participantInput.id}
              participant={participantInput}
              update={update}
            />
          )
        })}
      </ul>
      <button value="Annuler" onClick={() => cancel()}>Annuler</button>
      <button value="Sauvegarder" onClick={() => save()}>Sauvegarder</button>
    </>
  );

}

const ParticipantEdit = (props) => {
  const {
    participant,
    update
  } = props;
  console.log(participant);
  return (
    <li>
      <h3>{participant.name}</h3>
      <select value={participant.location} onChange={(event) => update(participant.id,'location', event.target.value) }>
        <option value={LOCATIONS.Montreal}>Montreal</option>
        <option value={LOCATIONS.Quebec}>Quebec</option>
        <option value={LOCATIONS.Home}>Distance</option>
      </select>
      <select value={participant.role} onChange={(event) => update(participant.id,'role', event.target.value) }>
        <option value={ROLES.FrontEnd}>Front-end</option>
        <option value={ROLES.BackEnd}>Back-end</option>
        <option value={ROLES.QA}>QA</option>
      </select>
      <input
        type="checkbox"
        checked={participant.available ? true : null}
        onChange={(event) => update(participant.id,'available', event.target.value) }
      />
    </li>
  );
}
