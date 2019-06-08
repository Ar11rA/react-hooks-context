import React, { useEffect, useState } from 'react';

const mockProducts = [
  { id: 1, name: 'Fortnite' },
  { id: 2, name: 'Doom' },
];

const api = {
  getProducts: () => Promise.resolve(mockProducts),
  getProduct: id => Promise.resolve(
    mockProducts.find(p => p.id === id),
  ),
};

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState('');
  const [selected, setSelected] = useState(2);
  const prodIds = [1, 2];

  async function fetchData() {
    const fetchedProducts = await api.getProducts();
    setProducts(fetchedProducts);
  }

  async function fetchProduct(productId) {
    const p = await api.getProduct(productId);
    setProduct(p.name);
  }

  useEffect(() => {
    fetchData();
    fetchProduct(selected);
  }, [selected]);

  return (
    <div>
      <h1>Async shop</h1>
      <h2>Products</h2>
      {products.map(p => <div>{p.name}</div>)}
      <h3>Selected product</h3>
      {' '}
      {product}
      <button type="button" onClick={() => setSelected(prodIds[Math.floor(Math.random() * prodIds.length)])}>Change selected</button>
    </div>
  );
};

export default ProductList;
