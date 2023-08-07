import React from 'react';
import ReactDOM from 'react-dom/client';
import './i18n/i18n.ts';
import App from './App.tsx';
import { ErrorBoundary } from 'react-error-boundary';
import Error from './components/Error.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary FallbackComponent={Error}>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
