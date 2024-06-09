import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import './App.css';
import Navbar from './Components/Navbar'
import Products from './Components/Prodcust';

function App() {
  return (
    <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<Products />} />
    </Routes>
  </Router>
  );
}

export default App;
