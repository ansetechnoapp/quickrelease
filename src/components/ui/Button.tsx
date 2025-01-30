// components/Button.js
import React from 'react';
import { FaArrowRight } from 'react-icons/fa';

const Button = ({ children, onClick, disabled = false, isLoading = false, icon }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled || isLoading}
      className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white font-bold py-3 px-6 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
    >
      {isLoading ? (
         <svg
         className="animate-spin h-5 w-5 mr-3 ..."
         viewBox="0 0 24 24"
       >
         {/* Loading spinner SVG */}
       </svg>
      ) : (
        <>
          {children}
          {/* <FaArrowRight className="ml-2" /> */}
          {icon}
           
         
        </>
      )}
    </button>
  );
};

export default Button;