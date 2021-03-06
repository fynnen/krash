import React from 'react';

import { BaseStyles, Themes } from '../helpers/globalStyles';

import KrashStyled from './styled/KrashStyled';
import ParticipantsMode from './ParticipantsMode';
import TeamsPanel from './TeamsPanel';

export const Krash = (props) => {
  const {
    contentHeight,
    isNightMode,
    participants,
    showParticipantsInfo,
    teams,
    toggleParticipantsInfo,
    updateParticipants,
  } = props;

  return (
    <KrashStyled className="content">
      <Themes
        theme={isNightMode ? "night" : "day"}
        contentHeight={contentHeight}
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
    </KrashStyled>
  )
};

export default Krash;