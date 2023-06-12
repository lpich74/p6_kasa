import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './index.css';
import Layout from './components/Layout';
import Home from './pages/Home';
import Error from './pages/Error';
import About from './pages/About';
import Housing from './pages/Housing';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>    
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/housing/:id" element={<Housing />} />
          <Route path="/about" element={<About />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Layout>
    </Router>
  </React.StrictMode>
);
