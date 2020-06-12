import React, {useEffect, useRef} from 'react';

import HeaderStyled from './styled/HeaderStyled';
import ToggleNightMode from './ToggleNightMode';
import useSize from '../hooks/useSize';
import { useContentHeight } from '../context/ContentHeightContext';

export const Header = (props) => {
  const {
    isNightMode,
    toggleNightMode,
	} = props;

	const headerRef = useRef();
	const headerSize = useSize(headerRef);
	const contentHeight = useContentHeight();

	useEffect(() => {
    contentHeight.setHeaderHeight(headerSize.height);
  }, [headerSize.height]);

  return (
    <HeaderStyled
      className="App-header"
      isNightMode={isNightMode}
      ref={headerRef}
    >
      <h1>KrAsH</h1>
      <ToggleNightMode
        isNightMode={isNightMode}
        toggleNightMode={toggleNightMode}
      />
    </HeaderStyled>
  )
};

export default Header;