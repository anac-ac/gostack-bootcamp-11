import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './styles/glogal';
import Routes from './routes';

const App: React.FC = () => (
  <>
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
    <GlobalStyles />
  </>
);

export default App;
