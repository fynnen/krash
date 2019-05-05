import React from 'react';

import { BaseStyles, Themes } from '../helpers/globalStyles';

import KrashStyled from './styled/KrashStyled';
import ParticipantsMode from './ParticipantsMode';
import RandomizeTeamControls from './RandomizeTeamControls';
import TeamsPanel from './TeamsPanel';

export const Krash = (props) => {
  const {
    isNightMode,
    numberOfTeams,
    participants,
    randomize,
    teams,
    updateNumberOfTeams,
    updateParticipants,
  } = props;

  return (
    <KrashStyled className="content">
      <Themes theme={isNightMode ? "night" : "day"} /> 
      <BaseStyles /> 
      <ParticipantsMode participants={participants} updateParticipants={updateParticipants}  />
      <RandomizeTeamControls randomize={randomize} updateNumberOfTeams={updateNumberOfTeams} numberOfTeams={numberOfTeams}/>
      <TeamsPanel teams={teams} />
    </KrashStyled>
  )
};

export default Krash;