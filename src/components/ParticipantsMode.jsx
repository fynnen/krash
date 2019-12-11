import React, { useState } from 'react';

import ParticipantsList from './ParticipantsList';
import ParticipantsEdit from './ParticipantsEdit';
import { SORTBY as sb } from "../constants";

const getImmutable = (fromArray) => {
  const newArray = [];
  fromArray.forEach(x => newArray.push(Object.assign({}, x)));
  return newArray;
}

export const ParticipantsMode = (props) => {
  const {
    isNightMode,
    participants,
    showParticipantsInfo,
    toggleParticipantsInfo,
    updateParticipants
  } = props;

  let participantsToDisplay = participants;

  const [participantInputs, setParticipantsInput] = useState(participants);
  const [editMode, setEditMode] = useState(false);
  const cancelEdit = () => {
    setEditMode(false);
  }

  const updateInput = (id, field, value) => {
    let participantsInput2 = getImmutable(participantInputs);
    let index = participantsInput2.findIndex(x => x.id === id);
    if(index !== -1){
      if(participantsInput2[index].hasOwnProperty(field)){
        participantsInput2[index][field] = value;
        setParticipantsInput(participantsInput2);
      }
    }
  }
  
  const saveParticipants = () => {
    updateParticipants(participantInputs);
    setEditMode(false);
  }

  const [alphabeticalAscendingOrder, setAlphabeticalOrder] = useState(true);
  const [roleAscendingOrder, setRoleOrder] = useState(true);
  const [locationAscendingOrder, setLocationlOrder] = useState(true);

  const sortParticipants = (sortBy) => {
    switch(sortBy) {
      case sb.ALPHABETIC:
      console.log('HERE');
        if (alphabeticalAscendingOrder) {
          participantsToDisplay.sort((x, y) => (x.lastName > y.lastName) ? 1 : -1);
        } else {
          participantsToDisplay.sort((x, y) => (x.lastName > y.lastName) ? -1 : 1);
        }
        setAlphabeticalOrder(!alphabeticalAscendingOrder);
        break;
      case sb.LOCATION:
        if (roleAscendingOrder) {
          participantsToDisplay.sort((x, y) => (x.location > y.location) ? 1 : -1);
        } else {
          participantsToDisplay.sort((x, y) => (x.location > y.location) ? -1 : 1);
        }
        setRoleOrder(!roleAscendingOrder);
        break;
      case sb.ROLE:
        if (locationAscendingOrder) {
          participantsToDisplay.sort((x, y) => (x.role > y.role) ? 1 : -1);
        } else {
          participantsToDisplay.sort((x, y) => (x.role > y.role) ? -1 : 1);
        }
        setLocationlOrder(!locationAscendingOrder);
        break;
    }
  }

  return (
    editMode
      ?
        <ParticipantsEdit
          cancel={cancelEdit}
          participantInputs={participantInputs}
          save={saveParticipants}
          update={updateInput}
        />
      :
        <ParticipantsList
          isNightMode={isNightMode}
          participants={participantsToDisplay}
          setEditMode={setEditMode}
          showParticipantsInfo={showParticipantsInfo}
          sortParticipants={sortParticipants}
          toggleParticipantsInfo={toggleParticipantsInfo}
        />
  );
}

export default ParticipantsMode;