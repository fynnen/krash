import React, { useEffect, useRef, useState } from 'react';
import { IoIosArrowDropright, IoIosArrowDropdown } from 'react-icons/io';

import HeaderStyled from './styled/HeaderStyled';
import ToggleNightMode from './ToggleNightMode';
import { useContentHeight } from '../context/ContentHeightContext';

export const Header = (props) => {
  const {
    isNightMode,
    toggleNightMode,
	} = props;

	const headerRef = useRef();
	const headerHeight = useRef();
	const contentHeight = useContentHeight();

	const headerSizeChangeObserver = new ResizeObserver(entries => {
		if (entries[0].target.clientHeight !== headerHeight.current) {
			headerHeight.current = entries[0].target.clientHeight;
			contentHeight.setHeaderHeight(headerHeight.current);
		}
	});

	useEffect(() => {
		headerSizeChangeObserver.observe(headerRef.current);
	}, []);

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