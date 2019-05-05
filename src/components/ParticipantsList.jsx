import React from 'react';
import ParticipantStyled from './styled/ParticipantStyled';
import ParticipantsListStyled from './styled/ParticipantsListStyled';

export const ParticipantsList = (props) => {
  const { participants } = props;
  return (
    <ParticipantsListStyled>
      {participants.map((participant, i) => {
        return <ParticipantStyled key={participant.id} participant={participant} />
      })}
    </ParticipantsListStyled>
  )
};

export default ParticipantsList;