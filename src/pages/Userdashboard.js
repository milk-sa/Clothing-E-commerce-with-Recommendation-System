import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Productsection from '../components/Productsection';
import Herosection from '../components/Herosection';

export default function UserDashboard({ onNavigate }) {
  return (

     
    
    <div className="min-h-screen bg-gray-100 font-sans antialiased">
      <Header onNavigate={onNavigate} />
      <Herosection onNavigate={onNavigate} />
      <Productsection title="Find something to buy" />
      <Productsection title="Top sellers" />
      <Footer />
    </div>

  );
}
