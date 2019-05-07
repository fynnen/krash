import React from 'react';

import { IoIosPaper } from 'react-icons/io';
import ToggleParticipantsInfoStyled from './styled/ToggleParticipantsInfoStyled';

const ToggleParticipantsInfo = props => {
  const { isNightMode, showParticipantsInfo, toggleParticipantsInfo } = props;

  return (
    <ToggleParticipantsInfoStyled
      isNightMode={isNightMode}
      onClick={toggleParticipantsInfo}
      showParticipantsInfo={showParticipantsInfo}
    >
      <div className="toggle-participants-info">
        <IoIosPaper size="20px" />
      </div>
    </ToggleParticipantsInfoStyled>
  );
};

export default ToggleParticipantsInfo;
