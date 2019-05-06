import React from 'react';

import { IoMdCreate } from "react-icons/io";
import ParticipantStyled from './styled/ParticipantStyled';
import ParticipantsListStyled from './styled/ParticipantsListStyled';
import ToggleParticipantsInfo from './ToggleParticipantsInfo';

export const ParticipantsList = (props) => {
  const {
    isNightMode,
    participants,
    setEditMode,
    showParticipantsInfo,
    toggleParticipantsInfo,
  } = props;

  return (
    <ParticipantsListStyled>
      <div className="edit-participants-buttons">
        <button onClick={() => setEditMode(true)} value="Modifier">
          Modifier les participants <IoMdCreate />
        </button>
        <ToggleParticipantsInfo
          isNightMode={isNightMode}
          showParticipantsInfo={showParticipantsInfo}
          toggleParticipantsInfo={toggleParticipantsInfo}
        />
      </div>
      <ul>
        {participants.map((participant, i) => {
          return <ParticipantStyled key={participant.id} participant={participant} />
        })}
      </ul>
    </ParticipantsListStyled>
  )
};

export default ParticipantsList;