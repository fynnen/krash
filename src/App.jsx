import React from 'react';
import { ContentHeightContextProvider } from './context/ContentHeightContext';
import { Layout } from './components/Layout';

const App = () => {
  return (
    <div className="App">
			<ContentHeightContextProvider>
				<Layout />
			</ContentHeightContextProvider>
    </div>
  );
};

export default App;
