import React from 'react'
import Product from './Product';
import shoeswomen from '../assets/shoes.jpg';
import sleeve from '../assets/shortsleeve.jpg';
import oxford from '../assets/oxford.jpg';
import tshirt from '../assets/t-shirt.jpg';
import kemis from '../assets/habeshakemis.jpg';
import menswear from '../assets/traditional.jpg';
import bag from '../assets/bag.jpg';
import belt from '../assets/belt.jpg';

export default function Productsection(
{title}) {
  const products = [
    
      {id: 1, image: sleeve, name:"men short sleeve",description:'A stylish short sleeve shirt, perfect for casual outings.',price:"4000.00 ETB" },
       { id: 2,image:oxford, name: 'oxford shoe- balck-sam', price: 'ETB 3000.00',description: 'Elegant black Oxford shoes, ideal for formal occasions.' },
        { id: 3,image:shoeswomen, name: 'apricot woman flats', price: 'ETB 4000.00', description: 'front covered, fashionable flat shoes for women.' },
        { id: 4,image:tshirt, name: 'men oversize t-shirt', price: 'ETB 40000.00', description: 'Comfortable and trendy t-shirt' },
        { id: 5,image:kemis, name: "habesha kemis", price:"ETB 12000.00", description:"women ethiopian Traditional habesha kemis"},
        { id: 6,image:menswear, name:"mens traditional wear",price:"ETB 6000.00",description:"mens ethiopian traditional wear"},
        { id: 7,image:bag, name:"customized bag",price:"ETB 3000.00",description:"beautifull customized bag"},
        { id: 8,image:belt, name:"leather belt",price:"ETB 1500.00",description:"genuine leather belt"},
    ]; 
    
    
    
     return (
    <section className="py-10 px-4">
      <div className="container mx-auto">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">{title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {products.map(product => (
            <Product
              key={product.id}
              image={product.image}
              name={product.name}
              description={product.description}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
    
    
  

  