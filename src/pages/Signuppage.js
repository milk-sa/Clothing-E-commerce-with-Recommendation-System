import React from 'react';

export default function Signup({ onRegisterSuccess }) {
  



  return (
    <div className="flex items-center justify-center min-h-[500px] bg-gray-50 p-6 rounded-lg shadow-md mx-auto max-w-md my-8">
      <div className="w-full">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">Sign Up</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 font-bold" htmlFor="fullName">Full Name</label>
            <input className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-200" type="text" id="fullName" placeholder="jon doe" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 font-bold font-bold" htmlFor="email">Email</label>
            <input className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-200" type="email" id="email" placeholder="example@gmail.com" />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2 font-bold" htmlFor="password">Password</label>
            <input className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-200" type="password" id="password" placeholder="Enter strong password" />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-2 font-bold" htmlFor="confirmPassword">Confirm Password</label>
            <input className="w-full px-3 py-2 border border-gray-700 rounded-md bg-gray-200" type="password" id="confirmPassword" placeholder="Confirm password" />
          </div>
          <button type="submit" className="w-full bg-gray-800 text-white font-bold px-4 py-2 rounded-md hover:bg-gray-900">Sign Up</button>
          <p className="text-center text-gray-600 text-sm mt-4">
            Already have an account? <a href="login" className="text-blue-600 hover:underline">Log in</a>
          </p>
        </form>
      </div>
    </div>
  );
}

  