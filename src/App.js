import React from 'react'
import "./App.css"
import {  Navigate, Route, Routes } from "react-router-dom"
// importing the routes
import Nav from './components/Nav';
import Home from './pages/Home';
import About from './pages/About';
import HeroDetails from './pages/HeroDetails';
// import Footer from './components/Footer';

// importing the components 
function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/hero/:id" element={<HeroDetails />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
      </div>
    
  );
}
export default App;
