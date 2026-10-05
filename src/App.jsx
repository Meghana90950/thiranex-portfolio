import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import Cart from './pages/Cart';

// Mock product dataset
const MOCK_PRODUCTS = [
  { id: 1, name: "Wireless Headphones", price: 99.99, image: "https://unsplash.com", desc: "Premium noise-canceling headphones with up to 40 hours of battery life." },
  { id: 2, name: "Minimalist Watch", price: 149.99, image: "https://unsplash.com", desc: "Elegant watch designed with a sleek matte finish and leather strap." },
  { id: 3, name: "Mechanical Keyboard", price: 79.99, image: "https://unsplash.com", desc: "Tactile mechanical switches with dynamic RGB backlighting." }
];

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  return (
    <Router>
      <Navbar cartCount={cart.length} />
      <div style={{ padding: '20px', fontFamily: 'sans-serif' }}>
        <Routes>
          <Route path="/" element={<Home products={MOCK_PRODUCTS} />} />
          <Route path="/product/:id" element={<ProductDetail products={MOCK_PRODUCTS} addToCart={addToCart} />} />
          <Route path="/cart" element={<Cart cartItems={cart} />} />
        </Routes>
      </div>
    </Router>
  );
}

