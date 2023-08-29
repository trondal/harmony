import React from 'react';
import ReactDOM from 'react-dom/client';
import './i18n/i18n';
import { ErrorBoundary } from 'react-error-boundary';
import App from './App';
import Error from './components/Error';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={Error}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
