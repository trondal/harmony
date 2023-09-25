import React from 'react';
import ReactDOM from 'react-dom/client';
import './i18n/i18n';
// import { ErrorBoundary } from 'react-error-boundary';
import { App } from './App';
// import { ErrorAlert } from './components/ErrorAlert';

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
