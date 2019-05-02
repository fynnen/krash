import React from 'react';
import { ParticipantStyled } from './Participant';

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