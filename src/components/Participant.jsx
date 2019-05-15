import React from 'react';
import { LOCATIONS, ROLES } from '../constants';

export const Participant = ({participant, className, showParticipantsInfo}) => {
  if (!participant.firstName ||!participant.lastName || !participant.role || !participant.location) return null;
  const participantRoleId = ROLES[participant.role] && ROLES[participant.role].id;
  const participantRoleName = ROLES[participant.role] && ROLES[participant.role].name;
  const participantLocationId = LOCATIONS[participant.location] && LOCATIONS[participant.location].id;
  const participantLocationName = LOCATIONS[participant.location] && LOCATIONS[participant.location].name;

  if (participantRoleId && participantRoleName && participantLocationId && participantLocationName){
    return (
      <li className={className}>
        <h3>{`${participant.lastName} ${participant.firstName}`}</h3>
        {
          showParticipantsInfo && (
            <div className="participant-info">
            <p className={participantLocationId}>{participantLocationName}</p>
            <p className={participantRoleId}>{participantRoleName}</p>
          </div>
          )
        }
      </li>
    )
  }

  return null;
};

export default Participant;