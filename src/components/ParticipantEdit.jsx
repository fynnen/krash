import React from 'react';
import { LOCATIONS, ROLES } from '../constants';

export const ParticipantEdit = (props) => {
  const {
    participant,
    update
  } = props;
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
        checked={participant.available ? true : false}
        onChange={(event) => update(participant.id,'available', event.target.checked) }
      />
    </li>
  );
}

export default ParticipantEdit;
