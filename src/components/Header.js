import React from 'react'
import logo from '../assets/Logo.png';

function Header({onNavigate}) {
  return (<header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className=" bg-gray-900 flex items-center  justify-between h-12 ">
          
          {/* Logo */}
          <div className="mr-8  bg-white flex items-center space-x-2 mb-4 md:mb-0 w-full md:w-auto">
            <img src= {logo} alt="Logo" className="rounded-full w-48 h-12 "/>
            </div>
           <div className="bg-gray-900 rounded-md px-4 py-2 flex items-center">
              <a href="home" className="text-gray-100 hover:text-white font-medium">Home</a>
           </div>

          {/* Search Bar */}
          <div className=" flex-1 max-w-md mx-8">
            <div className="relative ">
              <button className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-6 h-16 rounded-full"></button> 
              <input
                type="text"
                placeholder="What are you looking for?"
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md bg-gray-50 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
              <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-800 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
            </div>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              
              
            </div>
            <button className="px-4 py-2 text-gray-700 bg-gray-100 rounded-full hover:bg-gray-200 transition-colors w-32" onClick={() => onNavigate('Register')}> 
              Register
            </button>
            <button className="w-32 px-4 py-2 bg-gray-800 text-white rounded-full border-2 border-gray-200 hover:bg-gray-800 transition-colors" onClick={() => onNavigate('login')}>
              Login
            </button>
            
          </div>
        </div>
      </div>
    </header>
   
  )
}
export default Header;


    
      
    
  






      
    
  

