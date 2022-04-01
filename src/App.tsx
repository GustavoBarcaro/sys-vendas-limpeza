import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import Navbar from './layout/navbar';
import Home from './pages/home';
import Footer from './layout/footer';

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/checkout" element={<div>Teste 1</div>} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      <Footer />
    </>
  );
}

export default App;
