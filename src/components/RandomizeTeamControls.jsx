import React from 'react';

import { SORTMETHODS } from '../constants';
import RandomizeTeamControlsStyled from './styled/RandomizeTeamControlsStyled';

const RandomizeTeamControls = props => {
  const { isNightMode, numberOfTeams, randomize, updateNumberOfTeams } = props;

  return (
    <RandomizeTeamControlsStyled isNightMode={isNightMode}>
      <label htmlFor="numberOfTeams">
        {"Nombre d'équipes :"}
        <input
          id="numberOfTeams"
          type="number"
          onChange={e => updateNumberOfTeams(e.target.value)}
          defaultValue={numberOfTeams}
        />
      </label>
      <button type="button" onClick={() => randomize(SORTMETHODS.Random)}>
        Random
      </button>
      <button type="button" onClick={() => randomize(SORTMETHODS.Mixed)}>
        Mixed
      </button>
      <button type="button" onClick={() => randomize(SORTMETHODS.Splitted)}>
        Splitted
      </button>
    </RandomizeTeamControlsStyled>
  );
};

export default RandomizeTeamControls;
