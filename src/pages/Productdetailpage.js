import React from 'react';
import Authheader from '../components/Authheader'; // special header for logged-in users
import Footer from '../components/Footer';
import SimilarProducts from '../components/Similarproducts'; 
import productImage from '../assets/oxford.jpg';

export default function ProductDetail({ userName, onNavigate }) {
  return (
    <div className="min-h-screen bg-white font-sans antialiased">
      <Authheader userName={userName} onNavigate={onNavigate} />

      <section className="flex flex-col lg:flex-row items-start justify-between px-8 py-12 gap-12">
        {/* Product Image */}
        <div className="flex-1">
          <img src={productImage} alt="Oxford shoe - Black - sam" className="rounded-xl shadow-lg w-full max-w-md" />
        </div>

        {/* Product Info */}
        <div className="flex-1 space-y-4">
          <h2 className="text-2xl font-bold text-gray-800">Oxford shoe - Black - sam</h2>
          <p className="text-lg text-gray-600">ETB 3000.00</p>

          <div>
            <label className="block text-sm font-medium text-gray-700">Color</label>
            <select className="mt-1 block w-full border-gray-300 rounded-md">
              <option>Black</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Size</label>
            <select className="mt-1 block w-full border-gray-300 rounded-md">
              <option>40</option>
              <option>41</option>
              <option>42</option>
              <option>43</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Quantity</label>
            <input type="number" min="1" defaultValue="1" className="mt-1 block w-full border-gray-300 rounded-md" />
          </div>

          <div className="flex gap-4 mt-4">
            <button className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-900">Add to Cart</button>
            <button className="bg-orange-500 text-white px-6 py-2 rounded hover:bg-orange-600">Buy Now</button>
          </div>
        </div>
      </section>

      {/* Similar Products */}
      <SimilarProducts />

      <Footer />
    </div>
  );
}
