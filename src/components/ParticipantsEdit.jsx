import React from 'react';
import ParticipantEdit from './ParticipantEdit';

export const ParticipantsEdit = (props) => {
  const { participantInputs, cancel, update, save } = props;
  console.log('participantsEdit ', participantInputs);
  return (
    <>
      <ul>
        {participantInputs.map((participantInput, i) => {
          return (
            <ParticipantEdit
              key={participantInput.id}
              participant={participantInput}
              update={update}
            />
          )
        })}
      </ul>
      <button value="Annuler" onClick={() => cancel()}>Annuler</button>
      <button value="Sauvegarder" onClick={() => save()}>Sauvegarder</button>
    </>
  );
}

export default ParticipantsEdit;