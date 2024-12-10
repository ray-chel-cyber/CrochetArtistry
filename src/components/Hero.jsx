import React from 'react';
import image1 from '../assets/images/unsplash.jpg'



const Hero = () => {
    return (
        
        <div className="relative min-h-screen p-4">
            
            <div
                className="absolute inset-0 bg-cover bg-center "
                style={{
                    backgroundImage: `url(${image1})`,
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}
            />
            <div className="absolute inset-0 bg-black opacity-5" />
            <div className="relative flex flex-col items-center justify-center min-h-screen z-10">
                <h1 className="text-6xl font-bold mb-10 text-amber-900  animate-fadeIn">Welcome to Crochet Artistry</h1>
                <button className="px-8 py-3 text-white text-xl bg-amber-700 rounded hover:bg-amber-600 mt-5 animate-fadeIn">
                    Place an Order
                </button>
            </div>
        </div>
    );
};

export default Hero;