import React, { useState } from 'react';
import ProductCard from '../components/ProductCard';

export default function Home({ products }) {
  const [search, setSearch] = useState('');

  const filteredProducts = products.filter(p => 
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <h2>Product Catalog</h2>
      <input 
        type="text" 
        placeholder="Search products..." 
        value={search} 
        onChange={(e) => setSearch(e.target.value)} 
        style={{ padding: '10px', width: '300px', marginBottom: '20px', borderRadius: '4px', border: '1px solid #ccc' }}
      />
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {filteredProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

