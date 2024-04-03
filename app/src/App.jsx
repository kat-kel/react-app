// General imports
import './App.css';
import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
// Navigation bar imports
import Home from './pages/Home';
import About from './pages/About';
import Cycles from './pages/Cycles';
import Works from './pages/Works';
import Texts from './pages/Texts';
import NavBar from './components/NavBar';



function App() {
  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route exact path='/about' element={<About />}/>
        <Route exact path='/cycles' element={<Cycles />}/>
        <Route exact path='/works' element={< Works />}/>
        <Route exact path='/texts' element={<Texts />}/>
      </Routes>
    </div>
  );
}

export default App;
