import React, { useState } from 'react';
import { IoMdCreate } from "react-icons/io";

import ParticipantsList from './ParticipantsList';
import ParticipantsEdit from './ParticipantsEdit';

const getImmutable = (fromArray) => {
  const newArray = [];
  fromArray.forEach(x => newArray.push(Object.assign({}, x)));
  return newArray;
}

export const ParticipantsMode = (props) => {
  const { participants, updateParticipants } = props;
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

  return (
      editMode
        ? <ParticipantsEdit participantInputs={participantInputs} cancel={cancelEdit} update={updateInput} save={saveParticipants} />
        : (
          <>
            <button onClick={() => setEditMode(true)} value="Modifier">
              Modifier les participants <IoMdCreate />
            </button>
            <ParticipantsList participants={participants} />
          </>
        )
  );
}

export default ParticipantsMode;