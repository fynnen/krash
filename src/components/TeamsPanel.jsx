import React from 'react';

import ParticipantStyled from './styled/ParticipantStyled';

export const TeamsPanel = (props) => {
  const { teams } = props;
  return (
    <>
    {
      teams.map((team, x) => (
        <React.Fragment key={`team-${x}`}>
          <h3>{team.name}</h3>
          <ul>
            {team.persons.map((participant, i) => {
              return <ParticipantStyled key={`team-${x}-participant-${i}`} participant={participant} />
            })}
          </ul>
          <hr />
        </React.Fragment>
      ))
    }
    </>
  )
};

export default TeamsPanel;