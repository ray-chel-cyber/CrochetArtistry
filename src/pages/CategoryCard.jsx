import React from 'react';

const CategoryCard = ({ title, image }) => {
    return (
        <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-xl">
            <img src={image} alt={title} className="w-full h-48 object-cover transition-opacity duration-300" />
            <div className="absolute inset-0 bg-black opacity-30 transition-opacity duration-300" />
            <div className="absolute inset-0 flex items-center justify-center transition-opacity duration-300">
                <h3 className="text-white text-xl font-semibold z-10">{title}</h3>
            </div>
        </div>
    );
};

export default CategoryCard;