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
    showParticipantsInfo,
    teams,
    toggleParticipantsInfo,
    updateNumberOfTeams,
    updateParticipants,
  } = props;

  return (
    <KrashStyled className="content">
      <Themes
        theme={isNightMode ? "night" : "day"}
      /> 
      <BaseStyles />
      {
        teams.length > 0 ?
          (
            <TeamsPanel
              teams={teams}
            />
          )
        :
          (
            <ParticipantsMode
              isNightMode={isNightMode}
              participants={participants}
              showParticipantsInfo={showParticipantsInfo}
              toggleParticipantsInfo={toggleParticipantsInfo}
              updateParticipants={updateParticipants}
            />
          )
      }
      <RandomizeTeamControls
        isNightMode={isNightMode}
        numberOfTeams={numberOfTeams}
        randomize={randomize}
        updateNumberOfTeams={updateNumberOfTeams}
      />
      
    </KrashStyled>
  )
};

export default Krash;