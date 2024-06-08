import React from 'react';
import ReactDOM from 'react-dom/client';

import { AnimatePresence } from 'framer-motion';
import { RouterProvider } from 'react-router-dom';
import router from './router';
import './index.css';

const rootElement = document.getElementById('root');
if (!rootElement) throw new Error('root element not found');

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <AnimatePresence mode="wait">
      <RouterProvider router={router} />
    </AnimatePresence>
  </React.StrictMode>
);
