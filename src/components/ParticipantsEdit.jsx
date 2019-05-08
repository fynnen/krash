import React from 'react';
import ParticipantEdit from './ParticipantEdit';
import ParticipantsEditArea from './styled/ParticipantsEditArea';

export const ParticipantsEdit = (props) => {
  const {
    cancel,
    participantInputs,
    save,
    update,
  } = props;

  return (
    <ParticipantsEditArea>
      <div className="edit-participants-area">
        <button className="btn-participant" value="Annuler" onClick={() => cancel()}>Annuler</button>
        <button className="btn-participant" value="Sauvegarder" onClick={() => save()}>Sauvegarder</button>
      </div>
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
    </ParticipantsEditArea>
  );
}

export default ParticipantsEdit;