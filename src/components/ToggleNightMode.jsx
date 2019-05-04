import React, { useState } from "react";
import classNames from 'classnames';
import { IoIosMoon, IoIosSunny } from "react-icons/io";

export default function ToggleNightMode(props) {
  const {
    className: classNameStyled,
    toggle,
  } = props;
  const toggleNightModeClasses = classNames("toggle-night-mode", classNameStyled);

  return <div className={toggleNightModeClasses} onClick={toggle} />;
}