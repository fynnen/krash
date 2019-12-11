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
      <h3>{`${participant.lastName} ${participant.firstName}`}</h3>
      <div className="participant-edit-infos">
        <select value={participant.location} onChange={(event) => update(participant.id,'location', event.target.value) }>
          <option value={LOCATIONS.MTL.id}>Montreal</option>
          <option value={LOCATIONS.QC.id}>Quebec</option>
          <option value={LOCATIONS.HOME.id}>Distance</option>
        </select>
        <select value={participant.role} onChange={(event) => update(participant.id,'role', event.target.value) }>
          <option value={ROLES.FE.id}>Front-end</option>
          <option value={ROLES.BE.id}>Back-end</option>
          <option value={ROLES.QA.id}>QA</option>
        </select>
        <input
          type="checkbox"
          checked={participant.available ? true : false}
          onChange={(event) => update(participant.id,'available', event.target.checked) }
        />
      </div>
    </li>
  );
}

export default ParticipantEdit;
