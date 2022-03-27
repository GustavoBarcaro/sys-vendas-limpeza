import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Route, Routes } from 'react-router';

function App() {
  return (
    <main>
      <Router>
        <Routes>
          <Route path="/checkout" element={<div>Teste 1</div>} />
          <Route path="/" element={<div>Teste</div>} />
        </Routes>
      </Router>
    </main>
  );
}

export default App;
