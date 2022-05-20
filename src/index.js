import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { DarkModeContextProvider } from './context/darkModeContext';
import { PurpleModeContextProvider } from './context/purpleModeContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <PurpleModeContextProvider>
      <DarkModeContextProvider>
        <App />
      </DarkModeContextProvider>
    </PurpleModeContextProvider>

  </React.StrictMode>
);
