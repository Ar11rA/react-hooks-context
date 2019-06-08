import React, { useState } from 'react';

const ProductList = () => {
  const [products] = useState([{ id: 1, name: 'Fortnite' }]);
  const [cart, setCart] = useState([]);

  const addToCart = (p) => {
    const newCartItem = { ...p };
    setCart([...cart, newCartItem]);
  };

  return (
    <div>
      <h2>Cart items</h2>
      {cart.map(item => <div>{item.name}</div>)}
      <h2>Products</h2>
      {products.map(p => <div onClick={() => addToCart(p)}>{p.name}</div>)}
    </div>
  );
};
export default ProductList;
