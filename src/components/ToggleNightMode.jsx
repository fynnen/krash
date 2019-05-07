import React from "react";

import ToggleNightModeIcon from './ToggleNightModeIcon';
import ToggleNightModeStyled from './styled/ToggleNightModeStyled';

export const ToggleNightMode = (props) =>  {
  const {
    isNightMode,
    toggleNightMode,
  } = props;

  return (
    <ToggleNightModeStyled
      onClick={toggleNightMode}
    >
      <ToggleNightModeIcon
        isNightMode={isNightMode}
      />
    </ToggleNightModeStyled>
  );
};

export default ToggleNightMode;
