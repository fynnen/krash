import React from 'react';

import { IoMdCreate } from 'react-icons/io';
import ParticipantStyled from './styled/ParticipantStyled';
import ParticipantsListStyled from './styled/ParticipantsListStyled';
import ToggleParticipantsInfo from './ToggleParticipantsInfo';

const ParticipantsList = props => {
  const {
    isNightMode,
    participants,
    setEditMode,
    showParticipantsInfo,
    toggleParticipantsInfo
  } = props;

  return (
    <ParticipantsListStyled>
      <div className="edit-participants-buttons">
        <button
          onClick={() => setEditMode(true)}
          type="button"
          value="Modifier"
        >
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
          return (
            <ParticipantStyled
              key={`participant-list-${participant.id}`}
              participant={participant}
              showParticipantsInfo={showParticipantsInfo}
            />
          );
        })}
      </ul>
    </ParticipantsListStyled>
  );
};

export default ParticipantsList;
