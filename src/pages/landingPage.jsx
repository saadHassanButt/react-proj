import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './LandingPage.css';

const LandingPage = () => {
    const navigate = useNavigate();
    return (
        <div className="landing-page">
            <div className="content-wrapper">
                <div className="left-content">
                    <h1>Paradise Nursery</h1>
                    <p>Welcome to Paradise Nursery, your one-stop shop for beautiful house plants</p>
                    <button className="get-started" onClick={() => navigate('/products')}>Get Started</button>
                </div>
                <div className="right-content">
                    <p1>"Welcome to Paradise Nursery, your go-to destination for a diverse selection of beautiful house plants and more. Whether you're looking to brighten up your home with vibrant flowers or explore our exclusive range of exotic plants, we've got something special for every green thumb. At Paradise Nursery, we believe in the joy of nurturing nature, and we're committed to providing you with top-quality products and exceptional service. Discover our collection today and bring a touch of nature's beauty into your life!"</p1>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
