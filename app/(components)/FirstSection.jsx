import Link from 'next/link';
import React from 'react';

const FirstSection = () => {
  return (
    <section data-section="one" className="h-screen">
      <div className="flex justify-center items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans">
        <main className="flex flex-col gap-8 items-center">
          <span className="font-bold text-8xl">SpeedCode</span>
          <div className="flex gap-4 justify-around items-center flex-col sm:flex-row">
            <Link
              className="rounded-full font-bold text-white border-2 border-solid border-transparent flex items-center justify-center text-background gap-2 bg-[#29b960] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44 hover:bg-black hover:border-white transition-all duration-300"
              href={'/signup'}
              target="_blank"
              rel="noopener noreferrer"
            >
              Sign Up
            </Link>
            <Link
              className="rounded-full font-bold text-white border-2 border-solid border-black flex items-center justify-center bg-[#C23E3E] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44 hover:bg-black hover:border-white transition-all duration-300"
              href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Pro
            </Link>
          </div>
        </main>
      </div>
    </section>
  );
};

export default FirstSection;
