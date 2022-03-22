import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Calculator from './components/Calculator';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Home from './components/Home';
import Quote from './components/Quote';
import './App.css';

const App = () => (
  <>
    <NavBar />
    <Routes>
      <Route path="/Calculator" element={<Calculator />} />
      <Route path="/" element={<Home />} />
      <Route path="/Quote" element={<Quote />} />
    </Routes>
    <Footer />
  </>
);

export default App;
