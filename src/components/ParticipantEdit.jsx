import React from 'react';
import { LOCATIONS, ROLES } from '../constants';

export const ParticipantEdit = (props) => {
  const {
    participant,
    update
  } = props;

  if (!participant.firstName ||!participant.lastName || !participant.role || !participant.location) return null;

  return (
    <li>
      <h3>{`${participant.firstName} ${participant.lastName}`}</h3>
      <select value={participant.location} onChange={(event) => update(participant.id,'location', event.target.value) }>
        <option value={LOCATIONS.MTL}>Montreal</option>
        <option value={LOCATIONS.QC}>Quebec</option>
        <option value={LOCATIONS.Home}>Distance</option>
      </select>
      <select value={participant.role} onChange={(event) => update(participant.id,'role', event.target.value) }>
        <option value={ROLES.FE}>Front-end</option>
        <option value={ROLES.BE}>Back-end</option>
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
