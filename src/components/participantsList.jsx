import React, { useState, useRef } from 'react';
import { ParticipantStyled } from '.';

const LOCATIONS = {
  Montreal: "MTL",
  Quebec: "QC",
  Home: "HOME"
};
const ROLES = {
  FrontEnd: "FE",
  BackEnd: "BE",
  QA: "QA"
};

const participantsList = (props) => {
  const { participants, updateParticipants } = props;
  const [editMode, setEditMode] = useState(false);

  const component = editMode
    ? <ParticipantsRead participants={participants} />
    : <ParticipantsEdit participants={participants} save={updateParticipants} />;
  return (
    <>
    </>
  );
}

const ParticipantsRead = (props) => {
  const { participants } = props;
  return (
    <ul>
      {participants.map((participant, i) => {
        return <ParticipantStyled {...participant} />
      })}
    </ul>
  )
}
const ParticipantsEdit = (props) => {
  const { participants } = props;
  const locationRefs = Array.from({ length: participants.length }, () => useRef(null));
  const roleRefs = Array.from({ length: participants.length }, () => useRef(null));
  const availabilityRefs = Array.from({ length: participants.length }, () => useRef(null));

  return(
    <ul>
      {participants.map((participant, i) => {
        return (
        <ParticipantEdit 
          participant={participant}
        />
        )
      })}
    </ul>
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
      <select value={participant.location}>
        <option value={LOCATIONS.Montreal}>Montreal</option>
        <option value={LOCATIONS.Quebec}>Quebec</option>
        <option value={LOCATIONS.Home}>Distance</option>
      </select>
      <select value={participant.role}>
        <option value={ROLES.FrontEnd}>Front-end</option>
        <option value={ROLES.BackEnd}>Back-end</option>
        <option value={ROLES.QA}>QA</option>
      </select>
      <input type="checkbox" checked={participant.available ? "true" : null} />
    </li>
  );
}
