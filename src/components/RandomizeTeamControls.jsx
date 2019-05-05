import React from 'react';

import { SORTMETHODS } from '../constants';
import RandomizeTeamControlsStyled from './styled/RandomizeTeamControlsStyled';

export const RandomizeTeamControls = (props) => {
  const { randomize, updateNumberOfTeams, numberOfTeams } = props;
  return (
    <RandomizeTeamControlsStyled>
      <label>Nombre d'équipes :
        <input type="number" onChange={(e) => updateNumberOfTeams(e.target.value)} defaultValue={numberOfTeams}></input>
      </label>
      <button onClick={() => randomize(SORTMETHODS.Random)}>Random</button>
      <button onClick={() => randomize(SORTMETHODS.Mixed)}>Mixed</button>
      <button onClick={() => randomize(SORTMETHODS.Splitted)}>Splitted</button>
    </RandomizeTeamControlsStyled>
  );
};

export default RandomizeTeamControls;