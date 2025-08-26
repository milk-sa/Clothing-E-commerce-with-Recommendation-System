import React from 'react'
import hero from '../assets/Hero-image.png'

export default function Herosection({onNavigate}) {
  return (
    <section className='  items-center w-full px-0 bg-white py-20'>
        <div className="  flex justify-between items-center     ">
            <div className=" grid grid-cols-1 lg:grid-cols-2 gap-12 items-center justify-items-start">
               <div className="  flex  lg:flex-row items-center gap-12 py-12 relative flex-1">
                <img src={hero} alt="Hero Image" className='mb-2 w-96 max-w-lg ml-0 rounded-2xl shadow-2xl transform  transition-transform duration-500' />
                </div>
            </div>


           <div className=" flex flex-col items-start justify-center text-left gap-6 lg:text-left ml-20 ">
                <h1 className=" text-4xl lg:text-3xl text-pretty font-bold text-gray-900 mb-1 leading-tight w-full md:w-1/2 md:text-left">quickbuy helps you discover the  right products in less time with personalized{}
                    <span className="text-orange-500"> recommendations </span>tailerd for you.</h1>
                <p className='text-gray-600 text-lg mb-8 max-w-lg '>quickbuy recommends the products you're most likely to love.based on your interest and habits-making every visit feel personal.</p>
            
            
                <button className='w-full lg:w-auto bg-gray-800 text-white px-8 py-3 rounded-md hover:bg-gray-900 transition-colors font-medium mb-1' onClick={() => onNavigate("Register")}>Register</button>
                <p className='text-sm text-gray-600 '> if you have already registered</p>
                                  <button className='w-full lg:w-auto bg-gray border-4 text-black hover:text-black font-medium w-full px-8 py-3 rounded-md border-2 hover:border-black transition-colors'onClick={() => onNavigate("login")}>
                    Login</button><br/>
            </div>   
            
        </div>
        
      
    </section>
  )
}
