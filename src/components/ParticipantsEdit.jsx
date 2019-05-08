import React from 'react';
import ParticipantEdit from './ParticipantEdit';
import ParticipantsEditStyled from './styled/ParticipantsEditStyled';

export const ParticipantsEdit = (props) => {
  const {
    cancel,
    participantInputs,
    save,
    update,
  } = props;

  return (
    <ParticipantsEditStyled>
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
    </ParticipantsEditStyled>
  );
}

export default ParticipantsEdit;