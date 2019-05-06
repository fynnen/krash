import React, { useState } from 'react';

import ParticipantsList from './ParticipantsList';
import ParticipantsEdit from './ParticipantsEdit';

const getImmutable = (fromArray) => {
  const newArray = [];
  fromArray.forEach(x => newArray.push(Object.assign({}, x)));
  return newArray;
}

export const ParticipantsMode = (props) => {
  const {
    isNightMode,
    participants,
    updateParticipants
  } = props;

  const [participantInputs, setParticipantsInput] = useState(participants);
  const [editMode, setEditMode] = useState(false);
  const cancelEdit = () => {
    setEditMode(false);
  }

  const updateInput = (id, field, value) => {
    let participantsInput2 = getImmutable(participantInputs);
    console.log(`id: ${id} //// field: ${field} //// value: ${value}`);
    let index = participantsInput2.findIndex(x => x.id === id);
    if(index !== -1){
      if(participantsInput2[index].hasOwnProperty(field)){
        participantsInput2[index][field] = value;
        setParticipantsInput(participantsInput2);
        console.log(participantsInput2);
      }
    }
  }
  
  const saveParticipants = () => {
    updateParticipants(participantInputs);
    setEditMode(false);
  }

  console.log('render', participantInputs);
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
          participants={participants}
          setEditMode={setEditMode}
        />
  );
}

export default ParticipantsMode;