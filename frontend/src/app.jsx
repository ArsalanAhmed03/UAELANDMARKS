import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import SignUp from './Pages/SignUp';
import Buy from './Pages/Buy';
import Sell from './Pages/Sell';
import Invest from './Pages/Invest';
import Rent from './Pages/Rent';
import ProductPage from './Pages/Product_Page';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="/Buy" element={<Rent />} />
        <Route path="/Rent" element={<Buy />} />
        <Route path="/Sell" element={<Sell />} />
        <Route path="/Invest" element={<Invest />} />
        <Route path="/Product" element={<ProductPage />} />
      </Routes>
    </Router>
  );
};
