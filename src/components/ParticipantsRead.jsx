import React from 'react';
import ParticipantStyled from './styled/ParticipantStyled';

export const ParticipantsRead = (props) => {
  const { participants } = props;
  return (
    <ul>
      {participants.map((participant, i) => {
        return <ParticipantStyled key={participant.id} participant={participant} />
      })}
    </ul>
  )
};

export default ParticipantsRead;