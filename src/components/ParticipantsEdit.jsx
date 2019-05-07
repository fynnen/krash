import React from 'react';
import ParticipantEdit from './ParticipantEdit';

const ParticipantsEdit = props => {
  const { cancel, participantInputs, save, update } = props;

  return (
    <>
      <button value="Annuler" type="button" onClick={() => cancel()}>
        Annuler
      </button>
      <button value="Sauvegarder" type="button" onClick={() => save()}>
        Sauvegarder
      </button>
      <ul>
        {participantInputs.map(participantInput => {
          return (
            <ParticipantEdit
              key={`participant-edit-${participantInput.id}`}
              participant={participantInput}
              update={update}
            />
          );
        })}
      </ul>
    </>
  );
};

export default ParticipantsEdit;
