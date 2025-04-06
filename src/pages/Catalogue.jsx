import React from 'react';
import CategoryCard from './CategoryCard';

const Catalog = () => {
    const categories = [
        { id: 1, title: 'Tops/Shirts', image: 'path/to/image1.jpg' },
        { id: 2, title: ' Skirts', image: 'path/to/image2.jpg' },
        { id: 3, title: 'Pants', image: 'path/to/image2.jpg' },
        { id: 4, title: 'Hats', image: 'path/to/image2.jpg' },
        { id: 5, title: 'Swimwear', image: 'path/to/image2.jpg' },
        { id: 6, title: 'Cardigan/Sweaters', image: 'path/to/image2.jpg' },
        
    ];

    return (
        <div className="p-12 bg-amber-300">
            <h2 className="text-4xl font-bold text-center text-amber-700 mb-8">Catalogue</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {categories.map(category => (
                    <CategoryCard key={category.id} title={category.title} image={category.image} />
                ))}
            </div>
        </div>
    );
};

export default Catalog;