import React, { useState, useMemo } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { LanguageProvider } from './contexts/LanguageContext';

ReactDOM.render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
