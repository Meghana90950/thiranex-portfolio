import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ cartCount }) {
  return (
    <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '15px 30px', background: '#333', color: '#fff' }}>
      <Link to="/" style={{ color: '#fff', textDecoration: 'none', fontWeight: 'bold' }}>🛒 TechCatalog</Link>
      <div>
        <Link to="/" style={{ color: '#fff', marginRight: '20px', textDecoration: 'none' }}>Home</Link>
        <Link to="/cart" style={{ color: '#fff', textDecoration: 'none' }}>Cart ({cartCount})</Link>
      </div>
    </nav>
  );
}

