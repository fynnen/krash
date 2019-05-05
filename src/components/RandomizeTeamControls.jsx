import React from 'react';

import { SORTMETHODS } from '../constants';

export const RandomizeTeamControls = (props) => {
  const { randomize, updateNumberOfTeams, numberOfTeams } = props;
  return (
    <div>
      <button onClick={() => randomize(SORTMETHODS.Random)}>Random</button>
      <button onClick={() => randomize(SORTMETHODS.Mixed)}>Mixed</button>
      <button onClick={() => randomize(SORTMETHODS.Splitted)}>Splitted</button>
      <input type="number" onChange={(e) => updateNumberOfTeams(e.target.value)} defaultValue={numberOfTeams}></input>
    </div>
  );
};

export default RandomizeTeamControls;