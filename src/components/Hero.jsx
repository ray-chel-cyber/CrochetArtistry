import React from 'react';
import image1 from '../assets/images/unsplash.jpg'
import ContactForm from '../pages/ContactForm';
import { Link } from 'react-router-dom';



const Hero = () => {
    return (
        <div className="relative min-h-screen p-4">
     
            <img src={image1} alt="Hero Background" className="hidden" />
            <div
                className="absolute inset-0 bg-cover bg-center"
                style={{
                    backgroundImage: `url(${image1})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}
            />
            <div className="absolute inset-0 bg-black opacity-5" />
            <div className="relative flex flex-col items-center justify-center min-h-screen z-10">
                <h1 className="text-6xl font-bold mb-10 text-amber-900  animate-fadeIn">Welcome to Crochet Artistry</h1>
                <Link to="/ContactForm">
                <button className="px-8 py-3 text-white text-xl bg-amber-700 rounded hover:bg-amber-600 mt-5 animate-fadeIn">
                    Place an Order
                </button>
                </Link>
            </div>
        </div>
    );
};

export default Hero;