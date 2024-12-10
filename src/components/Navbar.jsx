import React from 'react'
import { Link } from 'react-router-dom';
import {  FaMobileAlt, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="bg-amber-600 p-4">
      <div className="container mx-auto">
        
        <div className="flex justify-between items-center">
          
          <Link to="/" className="flex items-center">
            {/* <img src={logoImage} alt="Logo" className="h-12 w-12 object-contain" /> */}
            <span className="ml-2 text-white text-2xl font-bold">CrochetArtistry</span>
          </Link>

            <Link 
              to="/contact" 
              className="text-white hover:text-gray-200 font-bold flex items-center gap-2"
              title="Contact"
            >
              <FaMobileAlt className="text-2xl" />
            </Link>
            
          
        </div>

        
      </div>
    </nav>
  )
}

export default Navbar