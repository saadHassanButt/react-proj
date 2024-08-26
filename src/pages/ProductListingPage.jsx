import React, { useState } from 'react';
import Header from '../components/Header';
import ProductCard from '../components/ProductCard';
import CartPopUp from '../components/CartPopup';
import cocimage from '../assets/coc.png';
import marijane from '../assets/marijuana.png';
import weed from '../assets/weed.png';
import mush from '../assets/mush.png';
import rose from '../assets/rose.png';
import lilly from '../assets/lilly.png';
import dand from '../assets/dandelions.png';
import tup from '../assets/tulip.png';
import spiderPlant from '../assets/spiderPlant.png'; // Example image
import snakePlant from '../assets/snakePlant.png'; // Example image
import './ProductListingPage.css';

const ProductListingPage = () => {
  const [cart, setCart] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const drugs = [
    // Drug products...
    {
      id: 1,
      name: 'Cocain Leaves',
      price: 9.99,
      image: cocimage,
      description: 'White, crystalline powder derived from coca leaves. Cocaine is an intense, euphoria-producing stimulant drug with strong addictive potential.',
    },
    {
      id: 2,
      name: 'Marijuana',
      price: 12.99,
      image: marijane,
      description: 'The dried leaves and flowering tops of the Cannabis sativa or Cannabis indica plant',
    },
    {
      id: 3,
      name: 'Weed',
      price: 19.99,
      image: weed,
      description: 'High quality premium cali weed that can get you head over heels.',
    },
    {
      id: 4,
      name: 'Mushrooms',
      price: 69.99,
      image: mush,
      description: 'Funny little things for party adventures.',
    }
  ];

  const flowers = [
    // Flower products...
    
{
  id: 5,
  name: 'Rose',
  price: 5.99,
  image: rose,
  description: 'A beautiful red rose known for its fragrance and beauty.',
},
{
  id: 6,
  name: 'Lilly',
  price: 6.99,
  image: lilly,
  description: 'A vibrant lilly that symbolizes perfect love and spring.',
},
{
  id: 7,
  name: 'Dandelions',
  price: 7.99,
  image: dand,
  description: 'Im in a field of dandelions wishin on every one that youd be minee.',
},
{
  id: 8,
  name: 'Tulip',
  price: 7.99,
  image: tup,
  description: 'Tulip is my favorite flower in the whole wide world',
}

  ];

  const airPurifyingPlants = [
    // Air-purifying plants...
    {
      id: 9,
      name: 'Spider Plant',
      price: 10.99,
      image: spiderPlant,
      description: 'Known for its ability to remove pollutants from the air, making it an excellent air purifier.',
    },
    {
      id: 10,
      name: 'Snake Plant',
      price: 15.99,
      image: snakePlant,
      description: 'A hardy plant that filters indoor air and is one of the easiest to grow.',
    }


  ];

  const addToCart = (product) => {
    const existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const handleQuantityChange = (product, delta) => {
    const updatedCart = cart.map(item =>
      item.id === product.id ? { ...item, quantity: item.quantity + delta } : item
    ).filter(item => item.quantity > 0);
    setCart(updatedCart);
  };

  const handleDeleteItem = (product) => {
    setCart(cart.filter(item => item.id !== product.id));
  };

  const handleCheckout = () => {
    // Handle checkout logic here
    alert("Proceeding to checkout");
    setIsCartOpen(false);
  };

  return (
    <div className="product-listing-page">
      <Header cartItemCount={cart.length} onCartClick={() => setIsCartOpen(true)} />

      {/* Drugs Section */}
      <section className="product-category">
        <h2>Drugs</h2>
        <div className="product-cards-container">
          {drugs.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
              isInCart={cart.some((item) => item.id === product.id)}
            />
          ))}
        </div>
      </section>

      {/* Flowers Section */}
      <section className="product-category">
        <h2>Flowers</h2>
        <div className="product-cards-container">
          {flowers.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
              isInCart={cart.some((item) => item.id === product.id)}
            />
          ))}
        </div>
      </section>

      {/* Air-Purifying Plants Section */}
      <section className="product-category">
        <h2>Air-Purifying Plants</h2>
        <div className="product-cards-container">
          {airPurifyingPlants.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              addToCart={addToCart}
              isInCart={cart.some((item) => item.id === product.id)}
            />
          ))}
        </div>
      </section>

      {/* Cart Pop-Up */}
      {isCartOpen && (
        <CartPopUp
          cartItems={cart}
          onClose={() => setIsCartOpen(false)}
          onQuantityChange={handleQuantityChange}
          onCheckout={handleCheckout}
          onDeleteItem={handleDeleteItem} // Pass the delete handler
        />
      )}
    </div>
  );
};

export default ProductListingPage;
