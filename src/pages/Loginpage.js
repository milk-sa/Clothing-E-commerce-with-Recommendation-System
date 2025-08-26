import React from 'react'

export default function Login({ onLoginSuccess }) {
  return (
  <div className="flex items-center justify-center min-h-[500px] bg-gray-50 p-6 rounded-lg shadow-md mx-auto max-w-md my-8">
    <div className="w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Login</h2>
        <form>
            <div className='mb-4'>
                <label className="block text-gray-700 mb-2 font-bold" htmlFor="email">email</label>
                <input className="w-full px-3 py-2 border border-gray-700 rounded-md  bg-gray-200" type="email" id="email" placeholder="example@email.com" />
            </div>
            <div className='mb-6'>
                <label className="block text-gray-700 mb-2 font-bold" htmlFor="password">Password</label>
                <input className="w-full px-3 py-2 border border-gray-700 rounded-md  bg-gray-200" type="password" id="password" placeholder="Enter your password" /> 
            </div>
            <div className="text-right">
            <a href="#" className="inline-block align-baseline font-bold text-sm text-blue-600 hover:text-blue-800">
              Forgot Password?
            </a>
            </div>
            <div className="flex items-center justify-between mb-4">
             <button className="w-full bg-gray-800 text-white font-bold px-4 py-2 rounded-md hover:bg-gray-900 transition-colors font-medium type"> Login</button>
            </div>
            <div>
             <p className="text-center text-gray-600 text-sm">
             Don't you have an account? <a href="register" className="text-blue-600 hover:underline">sign up</a>
              </p>
             </div>
        </form>
    </div>
</div>

            

    
      
    
  )
}