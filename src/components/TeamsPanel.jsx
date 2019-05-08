import React from 'react';

import TeamsPanelStyled from './styled/TeamsPanelStyled';

export const TeamsPanel = (props) => {
  const {
    reset,
    teams
  } = props;

  return (
    <>
    {
      teams.map((team, x) => (
        <TeamsPanelStyled key={`team-${x}`}>
          <h3>{team.name}</h3>
          <ul>
            {team.persons.map((participant, i) => {
              return <li
                key={`team-${x}-participant-${i}`} 
                dangerouslySetInnerHTML={{__html: `${participant.lastName} ${participant.firstName}`}} 
              />
            })}
          </ul>
          <hr />
        </TeamsPanelStyled>
      ))
    }
    <button className="reset" onClick={reset}>Reset</button>
    </>
  )
};

export default TeamsPanel;