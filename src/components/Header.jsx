import React from 'react';
import './Header.css'; // Optional, for styling
import logo from '../assets/logo.png';
import cart from '../assets/shopping-cart.png';

const Header = ({ cartItemCount, onCartClick }) => {
  return (
    <header className="header">
      <div className="logo">
        <a href="/">
          <img src={logo} alt="Paradise Nursery Logo" className="logo-img" />
        </a>
      </div>
      <p className="tagline">Your source for beautiful house plants</p>
      <div className="cart-icon" onClick={onCartClick}>
        <img src={cart} alt="Cart Icon" className="cart-img" />
        {cartItemCount > 0 && <span className="cart-count">{cartItemCount}</span>}
      </div>
    </header>
  );
};

export default Header;
