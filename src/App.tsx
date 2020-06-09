import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import GlobalStyles from './styles/global';

import AppProvider from './hooks';

import Routes from './routes';

const App: React.FC = () => (
  <Router>
    <GlobalStyles />

    <AppProvider>
      <Routes />
    </AppProvider>
  </Router>
);

export default App;
