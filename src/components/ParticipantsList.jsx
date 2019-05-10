import React from 'react';

import { IoMdCreate, IoIosList } from "react-icons/io";
import ParticipantStyled from './styled/ParticipantStyled';
import ParticipantsListStyled from './styled/ParticipantsListStyled';
import ToggleParticipantsInfo from './ToggleParticipantsInfo';
import { SORTBY as sb } from "../constants";

export const ParticipantsList = (props) => {
  const {
    isNightMode,
    participants,
    setEditMode,
    showParticipantsInfo,
    sortParticipants,
    toggleParticipantsInfo,
  } = props;

  return (
    <ParticipantsListStyled>
      <div className="edit-participants-buttons">
        <div className="edit-participants-buttons-left">
          <button onClick={() => setEditMode(true)} value="Modifier">
            <IoMdCreate /> Modifier les participants
          </button>
          <button onClick={() => {sortParticipants(sb.ALPHABETIC)}}><IoIosList /> Tri alphabétique</button>
          <button onClick={() => {sortParticipants(sb.LOCATION)}}><IoIosList /> Tri par localisation</button>
          <button onClick={() => {sortParticipants(sb.ROLE)}}><IoIosList /> Tri par rôle</button>
        </div>
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
          )
        })}
      </ul>
    </ParticipantsListStyled>
  )
};

export default ParticipantsList;