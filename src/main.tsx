import React from 'react';
import ReactDOM from 'react-dom/client';
import './i18n/config';
import App from './App.tsx';
import { ErrorBoundary } from 'react-error-boundary';
import Error from './Error.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={Error}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
