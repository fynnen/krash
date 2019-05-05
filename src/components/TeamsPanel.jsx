import React from 'react';

import ParticipantStyled from './styled/ParticipantStyled';

export const TeamsPanel = (props) => {
  const { teams } = props;
  return (
    <>
    {
      teams.map((team, i) => (
        <>
          <h3>{team.name}</h3>
          <ul>
            {team.persons.map((participant, i) => {
              return <ParticipantStyled key={i} participant={participant} />
            })}
          </ul>
          <hr />
        </>
      ))
    }
    </>
  )
};

export default TeamsPanel;