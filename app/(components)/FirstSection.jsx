'use client';

import Link from 'next/link';
import React from 'react';

const FirstSection = () => {
  return (
    <section data-section="one" className="h-screen w-full">
      <div className="flex justify-center items-center min-h-screen p-4 md:p-8 lg:p-20 font-sans">
        <main className="flex flex-col gap-4 md:gap-8 items-center w-full max-w-6xl mx-auto">
          {/* Responsive Title - Adjusted for better mobile scaling */}
          <h1
            className="font-bold text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 
                         tracking-tight text-center break-words whitespace-normal px-4
                         transition-all duration-300"
          >
            SpeedCode
          </h1>

          {/* Buttons Container - Modified for better mobile layout */}
          <div className="flex gap-3 md:gap-4 justify-center items-center flex-col sm:flex-row w-full max-w-xs sm:max-w-none px-4">
            {/* Log In Button */}
            <Link
              className="rounded-full font-bold text-white border-2 border-solid border-transparent 
                         flex items-center justify-center text-background gap-2 bg-[#29b960] 
                         text-sm sm:text-base h-10 sm:h-12 px-8 sm:px-5
                         w-full sm:w-auto sm:min-w-[140px] 
                         hover:bg-[#134d29] hover:border-[#134d29] transition-all duration-300"
              href={'/login'}
              rel="noopener noreferrer"
            >
              Log In
            </Link>

            {/* Sign Up Button */}
            <Link
              className="rounded-full font-bold text-white border-2 border-solid border-transparent 
                         flex items-center justify-center bg-[#C23E3E] 
                         text-sm sm:text-base h-10 sm:h-12 px-8 sm:px-5
                         w-full sm:w-auto sm:min-w-[140px] 
                         hover:bg-[#812323] hover:border-[##812323] transition-all duration-300"
              href={'/signup'}
              rel="noopener noreferrer"
            >
              Sign Up
            </Link>
          </div>

          {/* Optional subtitle container */}
          <div className="text-center px-4 text-sm md:text-base opacity-80 max-w-2xl mx-auto">
            {/* Add your subtitle or description here if needed */}
          </div>
        </main>
      </div>
    </section>
  );
};

export default FirstSection;
