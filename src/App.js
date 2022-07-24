import React from 'react';
import Navbar from './components/Navbar.js';
import './App.css';
import Home from './components/pages/Home.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Services from './components/pages/Services.js';
import Products from './components/pages/Products.js';
import Contact from './components/pages/ContactMe.js';
// import { Button } from './components/Button.js';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>

          <Route exact path="/" element={<Home/>}></Route>
          <Route exact path="/services" element={<Services />}></Route>
          <Route exact path="/products" element={<Products />}></Route>
          <Route exact path="/contact" element={<Contact />}></Route>
 
        </Routes>
      </Router>
    </>
  );
}

export default App;