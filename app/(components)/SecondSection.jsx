'use client';

import React from 'react';

const SecondSection = () => {
  return (
    <section className="panel h-screen w-full">
      <div className="flex flex-col justify-center items-center min-h-screen px-4 py-6 md:py-8 lg:py-12">
        {/* First Line */}
        <div className="block-slide-in-left text-left whitespace-nowrap mb-2 sm:mb-3 md:mb-4">
          <p
            className="font-sans font-extrabold
            text-6xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl
            tracking-tight leading-none"
          >
            <span className="block-appear flex flex-col text-shadow-white text-black sm:inline-block hover:scale-105 hover:-translate-y-2 transition-transform duration-300">
              <span>Code&nbsp;</span>
              <span>with</span>
            </span>
            <span className="inline-block hover:scale-105 hover:-translate-y-2 transition-transform duration-300">
              &nbsp;purpose,
            </span>
          </p>
        </div>

        {/* Second Line */}
        <div className="block-slide-in-right text-left whitespace-nowrap">
          <p
            className="font-sans font-extrabold
            text-6xl sm:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl
            tracking-tight leading-none"
          >
            <span className="inline-block hover:scale-105 hover:-translate-y-2 transition-transform duration-300">
              Practice&nbsp;
            </span>
            <span className="block-appear flex flex-col text-shadow-white text-black sm:inline-block hover:scale-105 hover:-translate-y-2 transition-transform duration-300">
              <span>with&nbsp;</span>
              <span>Speed</span>
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;