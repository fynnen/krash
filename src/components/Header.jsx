import React, { useState } from 'react';

import HeaderStyled from './styled/HeaderStyled';
import ToggleNightMode from './ToggleNightMode';
import { IoIosArrowDropright, IoIosArrowDropdown } from 'react-icons/io';

export const Header = (props) => {
  const {
    headerRef,
    isNightMode,
    toggleNightMode,
  } = props;

  const [isVerticalText, setisVerticalText] = useState(false);

  return (
    <HeaderStyled
      className="App-header"
      isNightMode={isNightMode}
      isVerticalText={isVerticalText}
      ref={headerRef}
    >
      <h1>KrAsH</h1>
      <button className="toggle-text-align" onClick={()=>{setisVerticalText(!isVerticalText)}}>
        {isVerticalText ?         
          <IoIosArrowDropdown /> :
          <IoIosArrowDropright/>
        }        
      </button>
      <ToggleNightMode
        isNightMode={isNightMode}
        toggleNightMode={toggleNightMode}
      />
    </HeaderStyled>
  )
};

export default Header;