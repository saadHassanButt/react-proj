import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './CartPopup.css'; // Optional, for styling

const CartPopUp = ({ cartItems, onClose, onQuantityChange, onCheckout, onDeleteItem }) => {
  const navigate = useNavigate(); // Initialize useNavigate

  // Calculate total price
  const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="cart-popup-overlay">
      <div className="cart-popup">
        <button className="close-btn" onClick={onClose}>X</button>
        <h2>Your Cart</h2>
        <div className="cart-items">
          {cartItems.length === 0 ? (
            <p>Your cart is empty.</p>
          ) : (
            cartItems.map((item, index) => (
              <div key={index} className="cart-item">
                <img src={item.image} alt={item.name} className="cart-item-image" />
                <div className="cart-item-info">
                  <h4>{item.name}</h4>
                  <p>${item.price.toFixed(2)}</p>
                  <div className="quantity-control">
                    <button onClick={() => onQuantityChange(item, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => onQuantityChange(item, 1)}>+</button>
                  </div>
                  {/* Delete Button */}
                  <button className="delete-btn" onClick={() => onDeleteItem(item)}>Delete</button>
                </div>
              </div>
            ))
          )}
        </div>
        {/* Display Total Price */}
        {cartItems.length > 0 && (
          <div className="total-price">
            <h3>Total Price: ${totalPrice.toFixed(2)}</h3>
          </div>
        )}
        <button className="checkout-btn" onClick={onCheckout}>Checkout</button>
        <button className="checkout-btn" onClick={onClose}>Continue Shopping</button>
      </div>
    </div>
  );
};

export default CartPopUp;
