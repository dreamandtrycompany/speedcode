import React from 'react';
import Link from 'next/link';

const FirstSection = ({ isSignedIn, user }) => {
  return (
    <section className="h-screen w-full flex flex-col md:flex-row">
      <div className="flex-1 flex justify-center items-center px-4 md:px-8 lg:px-20 font-sans">
        <div className="text-left">
          <h1 className="md:pl-[8rem] mt-[18rem] md:m-auto text-center font-bold text-7xl sm:text-6xl md:text-7xl md:text-left lg:text-8xl xl:text-9xl tracking-tight break-words whitespace-normal">
            Ready. Set. Type.
            <br />
            <span className="text-[#29b960]">Speed</span>
            <span className="text-[#C23E3E]">Code</span>
          </h1>
        </div>
      </div>
      <div className="mb-[18rem] md:m-auto flex-1 flex justify-center items-center px-12 md:px-8 lg:px-20 font-sans">
        {isSignedIn ? (
          <div className="flex flex-col items-center gap-4">
            <p className="text-lg md:text-xl text-bold mb-2 text-center">
              Welcome back, {user?.firstName || 'User'}!
            </p>
            <Link
              href="/main"
              className="rounded-full font-bold text-white border-2 border-solid border-transparent 
                       flex items-center justify-center bg-[#29b960] 
                       text-sm sm:text-base h-10 sm:h-12 px-8 sm:px-5
                       w-full sm:w-auto sm:min-w-[140px] 
                       hover:bg-[#134d29] hover:border-[#134d29] transition-all duration-300"
              rel="noopener noreferrer"
            >
              Practice Space {'->'}
            </Link>
          </div>
        ) : (
          <div className="flex flex-row gap-3 md:gap-4 w-full sm:w-auto">
            <Link
              href="/login"
              className="w-[12rem] rounded-full font-bold text-white border-2 border-solid border-transparent flex items-center justify-center bg-[#29b960] text-lg sm:text-xl h-14 sm:h-16 px-8 sm:px-7 md:w-full sm:w-auto sm:min-w-[210px] hover:bg-[#134d29] hover:border-[#134d29] transition-all duration-300"
              rel="noopener noreferrer"
            >
              Log In
            </Link>
            <Link
              href="/signup"
              className="w-[12rem] rounded-full font-bold text-white border-2 border-solid border-transparent flex items-center justify-center bg-[#C23E3E] text-lg sm:text-xl h-14 sm:h-16 px-8 sm:px-7 md:w-full sm:w-auto sm:min-w-[210px] hover:bg-[#812323] hover:border-[#812323] transition-all duration-300"
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
