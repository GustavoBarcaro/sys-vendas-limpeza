import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router';
import { ToastContainer } from 'react-toastify';
import Navbar from './layout/navbar';
import Checkout from './pages/checkout';
import Home from './pages/home';
import Footer from './layout/footer';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Navbar />
      <Router>
        <Routes>
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </Router>
      <Footer />
      <ToastContainer />
    </>
  );
}

export default App;
