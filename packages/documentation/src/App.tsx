import * as React from 'react';
import { Route, Routes } from 'react-router-dom';
import { ErrorBoundary } from '@nmw/react-components';
import '@nmw/react-components/dist/main.css';
import Home from './Home';

/**
 * Main component that wraps everything else
 */
function App() {
  return (
    <Routes>
      <Route
        path="/*"
        element={
          <ErrorBoundary>
            <Home />
          </ErrorBoundary>
        }
      />
    </Routes>
  );
}

export default App;
