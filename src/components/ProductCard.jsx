import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductCard({ product }) {
  return (
    <div style={{ border: '1px solid #ddd', padding: '15px', borderRadius: '8px', textAlign: 'center', width: '250px' }}>
      <img src={product.image} alt={product.name} style={{ width: '100%', height: '180px', objectFit: 'cover', borderRadius: '4px' }} />
      <h3>{product.name}</h3>
      <p style={{ fontWeight: 'bold', color: '#0070f3' }}>\${product.price}</p>
      <Link to={`/product/${product.id}`} style={{ display: 'inline-block', marginTop: '10px', padding: '8px 16px', background: '#0070f3', color: '#fff', textDecoration: 'none', borderRadius: '4px' }}>
        View Details
      </Link>
    </div>
  );
}

