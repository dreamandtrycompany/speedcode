import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const FirstSection = ({ isSignedIn, user }) => {
  // State for controlling visibility of different elements
  const [showTitle, setShowTitle] = useState(false);
  const [showSpeedCode, setShowSpeedCode] = useState(false);
  const [showButtons, setShowButtons] = useState(false);
  const [isFirstLoad, setIsFirstLoad] = useState(true);

  // Reset animation states
  const resetAnimations = () => {
    setShowTitle(false);
    setShowSpeedCode(false);
    setShowButtons(false);
  };

  // Start animations
  const startAnimations = () => {
    setTimeout(() => setShowTitle(true), 400);
    setTimeout(() => setShowSpeedCode(true), 900);
    setTimeout(() => setShowButtons(true), 1200);
  };

  // Effect for handling the loads
  useEffect(() => {
    if (isFirstLoad) {
      // First load - keep everything hidden
      resetAnimations();
      
      // Schedule second load
      const secondLoad = setTimeout(() => {
        setIsFirstLoad(false);
        startAnimations();
      }, 1000); // Wait 1 second before starting animations

      return () => clearTimeout(secondLoad);
    }
  }, [isFirstLoad]);

  return (
    <section className="h-screen w-full flex flex-col md:flex-row">
      <div className="flex-1 flex justify-center items-center px-4 md:px-8 lg:px-20 font-sans">
        <div className="text-left">
          <h1 className="mt-[18rem] md:m-auto text-left font-bold text-5xl sm:text-6xl md:text-5xl md:text-left lg:text-6xl xl:text-7xl tracking-tight break-words whitespace-normal">
            <span 
              className={`transition-opacity duration-1000 ease-in-out ${
                showTitle ? 'opacity-100' : 'opacity-0'
              }`}
            >
              Ready. Set. Type.
            </span>
            <br />
            <span 
              className={`transition-opacity duration-1000 ease-in-out ${
                showSpeedCode ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <span className="text-[#29b960]">Speed</span>
              <span className="text-[#C23E3E]">Code</span>
            </span>
          </h1>
        </div>
      </div>
      <div 
        className={`mb-[18rem] md:m-auto flex-1 flex justify-center items-center px-12 md:px-8 lg:px-20 font-sans transition-opacity duration-1000 ease-in-out ${
          showButtons ? 'opacity-100' : 'opacity-0'
        }`}
      >
        {isSignedIn ? (
          <div className="flex flex-col items-center gap-4">
            <p className="text-lg md:text-xl text-bold mb-2 text-left">
              Welcome back, {user?.firstName || 'User'}!
            </p>
            <Link
              href="/main"
              className="rounded-full font-bold text-white border-2 border-solid border-transparent 
                       flex items-center justify-center bg-[#29b960] 
                       text-sm sm:text-base h-8 sm:h-10
                       w-48 sm:w-52
                       hover:bg-[#134d29] hover:border-[#134d29] transition-all duration-300"
              rel="noopener noreferrer"
            >
              Practice Area
            </Link>
          </div>
        ) : (
          <div className="flex flex-row gap-3 md:gap-4">
            <Link
              href="/login"
              className="rounded-full font-bold text-white border-2 border-solid border-transparent 
                       flex items-center justify-center bg-[#29b960] 
                       text-base sm:text-lg h-8 sm:h-12
                       w-28 sm:w-36
                       hover:bg-[#134d29] hover:border-[#134d29] transition-all duration-300"
              rel="noopener noreferrer"
            >
              Log In
            </Link>
            <Link
              href="/signup"
              className="rounded-full font-bold text-white border-2 border-solid border-transparent 
                       flex items-center justify-center bg-[#C23E3E] 
                       text-base sm:text-lg h-8 sm:h-12
                       w-28 sm:w-36
                       hover:bg-[#812323] hover:border-[#812323] transition-all duration-300"
              rel="noopener noreferrer"
            >
              Sign Up
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default FirstSection;