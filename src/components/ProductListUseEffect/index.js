import React, { useEffect, useState } from 'react';

const products = [
  { id: 1, name: 'Fortnite' },
  { id: 2, name: 'Doom' },
];

const api = {
  getProducts: () => Promise.resolve(products),
  getProduct: id => Promise.resolve(
    products.find(p => p.id === id),
  ),
};

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [product, setProduct] = useState('');
  const [selected, setSelected] = useState(2);
  const prodIds = [1, 2];

  async function fetchData() {
    const products = await api.getProducts();
    setProducts(products);
  }

  async function fetchProduct(productId) {
    const p = await api.getProduct(productId);
    setProduct(p.name);
  }

  useEffect(() => {
    console.log(`use effect ${selected}`);
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
      <button onClick={() => setSelected(prodIds[Math.floor(Math.random() * prodIds.length)])}>Change selected</button>
    </div>
  );
};

export default ProductList;
