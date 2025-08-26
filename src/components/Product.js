import React from 'react'
import shoeswomen from '../assets/shoes.jpg'; 
import sleeve from '../assets/shortsleeve.jpg';


export default function Product({ image, name, description, price }) {
  return (
    
        <div className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105">
      <img src={image} alt={name} className="w-64 h-64 object-cover" />
      <div className="p-4">
        <h3 className="font-semibold text-lg text-gray-800 mb-1">{name}</h3>
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        <p className="text-gray-600 font-bold text-xl">{price}</p>
      </div>
    </div>
  );
};
      
    
  


      

    
  