import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Home from './components/Home';
import Settings from './components/Settings';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about/:id' element={<About />} />
        <Route path='settings' element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
