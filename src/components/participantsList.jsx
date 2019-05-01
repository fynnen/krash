import React, { useState, useRef } from 'react';
import { ParticipantStyled } from './Participant';
import { LOCATIONS, ROLES } from '../constants';
import { SORTMETHODS } from '../constants';
import Octicon, {Pencil} from '@githubprimer/octicons-react'

export const ParticipantsList = (props) => {
  const { participants, updateParticipants, randomize, updateNumberOfTeams, numberOfTeams } = props;
  const [editMode, setEditMode] = useState(false);
  const cancelEdit = () => {
    setEditMode(false);
  }

  return (
    <>
      {editMode
        ? <ParticipantsEdit participants={participants} cancel={cancelEdit} save={updateParticipants} />
        : <ParticipantsRead participants={participants} />}
      {!editMode && <button onClick={() => setEditMode(true)} value="Modifier">Modifier <Octicon icon={Pencil} ariaLabel="Add new item" /></button>}
      <button onClick={() => randomize(SORTMETHODS.Random)}>Random</button>
      <button onClick={() => randomize(SORTMETHODS.Mixed)}>Mixed</button>
      <button onClick={() => randomize(SORTMETHODS.Splitted)}>Splitted</button>
      <input type="number" onChange={(e) => updateNumberOfTeams(e.target.value)} defaultValue={numberOfTeams}></input>
    </>
  );
}

export const ParticipantsRead = (props) => {
  const { participants } = props;
  return (
    <ul>
      {participants.map((participant, i) => {
        return <ParticipantStyled participant={participant} />
      })}
    </ul>
  )
}

const getUpdatedParticipants = (participantInputs) => {
  const updatedParticipants = participantInputs.map((participantInput, i) => {
    const participant = Object.assign({}, participantInput.model);
    participant.role = participantInput.locationRef && participantInput.locationRef.current && participantInput.locationRef.current.value;
    participant.location = participantInput.roleRef && participantInput.roleRef.current && participantInput.roleRef.current.value;
    console.log(participantInput.availabilityRef && participantInput.availabilityRef.current && participantInput.availabilityRef.current.value);
    participant.available = participantInput.availabilityRef && participantInput.availabilityRef.current && participantInput.availabilityRef.current.value;
    return participant;
  })
  return updatedParticipants;
}

const getParticipantInputs = (participants) => {
  return participants.map((participant, i) => {
    return {
      model: participant,
      locationRef: useRef(null),
      roleRef: useRef(null),
      availabilityRef: useRef(null),
    }
  });
}

export const ParticipantsEdit = (props) => {
  const { participants, cancel, save } = props;
  const participantInputs = getParticipantInputs(participants);

  const updatedParticipants = getUpdatedParticipants(participantInputs);
  return (
    <>
      <ul>
        {participantInputs.map((participantInput, i) => {
          return (
            <ParticipantEdit
              key={i}
              participant={participantInput.model}
              locationRef={participantInput.locationRefs}
              roleRef={participantInput.roleRef}
              availabilityRef={participantInput.availabilityRef}
            />
          )
        })}
      </ul>
      <button value="Annuler" onClick={() => cancel()}>Annuler</button>
      <button value="Sauvegarder" onClick={() => save(updatedParticipants)}>Sauvegarder</button>
    </>
  );

}

const ParticipantEdit = (props) => {
  const {
    participant,
    locationRef,
    roleRef,
    availabilityRef
  } = props;

  return (
    <li>
      <h3>{participant.name}</h3>
      <select value={participant.location} ref={locationRef}>
        <option value={LOCATIONS.Montreal}>Montreal</option>
        <option value={LOCATIONS.Quebec}>Quebec</option>
        <option value={LOCATIONS.Home}>Distance</option>
      </select>
      <select value={participant.role} ref={roleRef}>
        <option value={ROLES.FrontEnd}>Front-end</option>
        <option value={ROLES.BackEnd}>Back-end</option>
        <option value={ROLES.QA}>QA</option>
      </select>
      <input
        type="checkbox"
        checked={participant.available ? true : null}
        ref={availabilityRef}
      />
    </li>
  );
}
