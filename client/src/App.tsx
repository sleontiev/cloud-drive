import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './pages/Login';
import Main from './pages/Main';
import Registration from './pages/Registration';

const App = () => (
  <Routes>
    <Route path='/' element={<Main />} />
    <Route path='/login' element={<Login />} />
    <Route path='/registration' element={<Registration />} />
  </Routes>
);

export default App;
