import React from 'react';
import { createRoot } from 'react-dom/client'; 
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';

import LandingPage from './views/LandingPage';
import Contact from './views/Contact';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
