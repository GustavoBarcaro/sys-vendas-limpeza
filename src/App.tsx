import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import Navbar from './layout/navbar';
import Footer from './layout/footer';

function App() {
  return (
    <main>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/checkout" element={<div>Teste 1</div>} />
          <Route path="/" element={<div>Teste</div>} />
        </Routes>
      </Router>
      <Footer />
    </main>
  );
}

export default App;
