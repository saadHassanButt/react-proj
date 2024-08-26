import React from 'react';
import Header from '../components/Header';
import './ShoppingCartPage.css'; // For page-specific styles

const ShoppingCartPage = () => {
  const cartItemCount = 3; // Replace with actual cart item count

  return (
    <div className="shopping-cart-page">
      <Header cartItemCount={cartItemCount} />
      <header>
        <h1>Shopping Cart</h1>
      </header>
      <div className="cart-items">
        {/* Cart items go here */}
      </div>
    </div>
  );
};

export default ShoppingCartPage;
