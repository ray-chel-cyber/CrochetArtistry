// import React from "react";
// import { Link } from "react-router-dom";

// const CategoryCard = ({ name, image, link }) => {
//   return (
//     <div className="transform transition duration-300 hover:scale-105 shadow-md rounded-lg overflow-hidden">
//       <Link to={link}>
//         <img src={image} alt={name} className="w-full h-48 object-cover" />
//         <div className="bg-blue-500 text-white text-center py-3 text-lg font-semibold">{name}</div>
//       </Link>
//     </div>
//   );
// };

// export default CategoryCard;

import React from 'react';

const CategoryCard = ({ title, image }) => {
    return (
        <div className="relative overflow-hidden rounded-lg shadow-lg transition-transform transform hover:scale-105">
            <img src={image} alt={title} className="w-full h-48 object-cover" />
            <div className="absolute inset-0 bg-black opacity-30" />
            <div className="absolute inset-0 flex items-center justify-center">
                <h3 className="text-white text-xl font-semibold z-10">{title}</h3>
            </div>
        </div>
    );
};

export default CategoryCard;