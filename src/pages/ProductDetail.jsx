import React from 'react';
import { useParams, Link } from 'react-router-dom';

export default function ProductDetail({ products, addToCart }) {
  const { id } = useParams();
  const product = products.find(p => p.id === parseInt(id));

  if (!product) return <h2>Product not found</h2>;

  return (
    <div style={{ display: 'flex', gap: '40px', marginTop: '20px' }}>
      <img src={product.image} alt={product.name} style={{ width: '400px', borderRadius: '8px' }} />
      <div>
        <h2>{product.name}</h2>
        <p style={{ fontSize: '20px', color: '#0070f3', fontWeight: 'bold' }}>${product.price}</p>
        <p style={{ lineHeight: '1.6' }}>{product.desc}</p>
        <button onClick={() => addToCart(product)} style={{ padding: '12px 24px', background: '#28a745', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontSize: '16px' }}>
          Add to Cart
        </button>
        <br /><br />
        <Link to="/">← Back to Catalog</Link>
      </div>
    </div>
  );
}

