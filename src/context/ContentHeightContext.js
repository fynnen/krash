import React, { createContext, useState, useContext } from 'react';

const ContentHeightContext = createContext({});

const ContentHeightContextProvider = (props) => {
  const [footerHeight, setFooterHeightState] = useState();
  const [headerHeight, setHeaderHeightState] = useState();

  return (
    <ContentHeightContext.Provider
      value={{
				footerHeight,
				headerHeight,
        setFooterHeight: (newFooterHeight) => {
					setFooterHeightState(newFooterHeight);
				},
				setHeaderHeight: (newHeaderHeight) => {
					setHeaderHeightState(newHeaderHeight);
				},
			}}
    >
      {props.children}
    </ContentHeightContext.Provider>
  );
};

const useContentHeight = () => useContext(ContentHeightContext);

export { ContentHeightContextProvider, useContentHeight };