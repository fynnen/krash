import React from "react";

import { IoIosPaper } from "react-icons/io";
import ToggleParticipantsInfoStyled from './styled/ToggleParticipantsInfoStyled';

export const ToggleParticipantsInfo = (props) =>  {
  const {
    isNightMode,
    showParticipantsInfo,
    toggleParticipantsInfo,
  } = props;

  return (
    <ToggleParticipantsInfoStyled
      isNightMode={isNightMode}
      onClick={toggleParticipantsInfo}
    >
      <div className="toggle-participants-info">
        <IoIosPaper size="20px" />
      </div>
    </ToggleParticipantsInfoStyled>
  );
};

export default ToggleParticipantsInfo;
