import React from 'react';
import { Link } from 'react-router-dom';

export default function Cart({ cartItems }) {
  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h2>Your Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty. <Link to="/">Go shopping</Link></p>
      ) : (
        <div>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {cartItems.map((item, index) => (
              <li key={index} style={{ display: 'flex', justifyContent: 'space-between', padding: '10px 0', borderBottom: '1px solid #eee' }}>
                <span>{item.name}</span>
                <strong>${item.price}</strong>
              </li>
            ))}
          </ul>
          <h3 style={{ textAlign: 'right', borderTop: '2px solid #333', paddingTop: '10px' }}>
            Total: ${total.toFixed(2)}
          </h3>
        </div>
      )}
    </div>
  );
}

