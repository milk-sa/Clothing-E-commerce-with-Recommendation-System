import React from 'react'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
        <div className=" m-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 ">
            <div>  
             <h3 className='text-lg font-semibold mb-4 '>company</h3>
             <ul className="space-y-2">
                <li><a href="#" className=" text-gray-300 hover:text-white transition-color">About Us</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">carriers</a></li>
                <li><a href="#" className="text-gray-300 hover:text-white transition-colors">location</a></li>
            </ul>
            </div>
            <div>
                <h3 className='text-lg font-semibold mb-4'>help</h3>
                <ul className="space-y-2">
                    <li><a href="#" className="text-gray-300 hover:text-white transition-color">size guide</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white transition-color">help and FAQs</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white transition-color">Returns</a></li>
                 </ul>
            </div>
            <div >
                <h3 className='text-lg font-semibold mb-4'>follow us</h3>
                <ul className="space-y-2">
                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Facebook</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Instagram</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors">twitter</a></li>
                    <li><a href="#" className="text-gray-300 hover:text-white transition-colors">tiktok</a></li>
                    
                    
                    
                </ul>
            </div>  
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
            <p>&copy; {new Date().getFullYear()} QuickBuy. All rights reserved.</p>
        </div> 
              

    </footer>
  )
}
