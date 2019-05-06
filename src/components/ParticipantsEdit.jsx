import React from 'react';
import ParticipantEdit from './ParticipantEdit';

export const ParticipantsEdit = (props) => {
  const {
    cancel,
    participantInputs,
    save,
    update,
  } = props;

  return (
    <>
      <button value="Annuler" onClick={() => cancel()}>Annuler</button>
      <button value="Sauvegarder" onClick={() => save()}>Sauvegarder</button>
      <ul>
        {participantInputs.map((participantInput, i) => {
          return (
            <ParticipantEdit
              key={`participant-edit-${participantInput.id}`}
              participant={participantInput}
              update={update}
            />
          )
        })}
      </ul>
    </>
  );
}

export default ParticipantsEdit;