import React from 'react';
import ReactDOM from 'react-dom/client';
import PrincipalPage from './app';
import { BrowserRouter, Routes , Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<PrincipalPage/>}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
