import React from "react";
import classNames from 'classnames';
import { IoIosMoon, IoIosSunny } from "react-icons/io";

import ToggleNightModeIconStyled from './styled/ToggleNightModeIconStyled';

export const ToggleNightModeIcon = (props) => {
  const {
    isNightMode,
  } = props;
  const toggleNightModeClasses = classNames("toggle-night-mode", {
    'night': isNightMode,
    'day': !isNightMode,
  });

  return (
    <ToggleNightModeIconStyled
      className={toggleNightModeClasses}
    >
      {(
        isNightMode ? 
          <IoIosMoon size="26px" />
        :
          <IoIosSunny size="26px" />
      )}
    </ToggleNightModeIconStyled>
  );
};

export default ToggleNightModeIcon;
