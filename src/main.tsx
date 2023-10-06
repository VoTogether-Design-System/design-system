import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import VDSProvider from './lib/VDSProvider/index.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <VDSProvider>
      <App />
    </VDSProvider>
  </React.StrictMode>
);
