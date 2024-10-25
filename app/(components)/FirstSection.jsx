'use client';

import Link from 'next/link';
import React from 'react';

const FirstSection = () => {
  return (
    <section data-section="one" className="h-screen w-full">
      <div className="flex justify-center items-center min-h-screen p-4 md:p-8 lg:p-20 font-sans">
        <main className="flex flex-col gap-4 md:gap-8 items-center w-full max-w-6xl mx-auto">
          {/* Responsive Title */}
          <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 
                         tracking-tight text-center break-words whitespace-normal px-4
                         transition-all duration-300">
            SpeedCode
          </h1>

          {/* Buttons Container */}
          <div className="flex gap-3 md:gap-4 justify-center items-center flex-col sm:flex-row w-full px-4">
            {/* Sign Up Button */}
            <Link
              className="rounded-full font-bold text-white border-2 border-solid border-transparent 
                         flex items-center justify-center text-background gap-2 bg-[#29b960] 
                         text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto sm:min-w-[160px] 
                         hover:bg-black hover:border-white transition-all duration-300"
              href={'/login'}
              rel="noopener noreferrer"
            >
              Log In
            </Link>

            {/* Get Pro Button */}
            <Link
              className="rounded-full font-bold text-white border-2 border-solid border-transparent 
                         flex items-center justify-center bg-[#C23E3E] 
                         text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto sm:min-w-[160px] 
                         hover:bg-black hover:border-white transition-all duration-300"
              href={"/signup"}
              rel="noopener noreferrer"
            >
              Sign Up
            </Link>
          </div>

          {/* Optional subtitle or additional content can be added here */}
          <div className="text-center px-4 text-sm md:text-base opacity-80 max-w-2xl mx-auto">
            {/* Add your subtitle or description here if needed */}
          </div>
        </main>
      </div>
    </section>
  );
};

export default FirstSection;