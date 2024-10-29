'use client';

import React from 'react';

const SecondSection = () => {
  return (
    <section className="panel h-screen w-full">
      <div className="flex flex-col justify-center items-center min-h-screen px-4 py-8 md:py-12 lg:py-16">
        {/* First Line */}
        <div className="text-left whitespace-nowrap mb-2 sm:mb-4 md:mb-6">
          <p
            className="font-sans font-extrabold
            text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem]
            tracking-tight leading-none"
          >
            <span className="flex flex-col text-shadow-white text-black sm:inline-block">
              <span>Code&nbsp;</span>
              <span>with</span>
            </span>
            <span className="inline-block">&nbsp;purpose,</span>
          </p>
        </div>

        {/* Second Line */}
        <div className="text-left whitespace-nowrap">
          <p
            className="font-sans font-extrabold
            text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem]
            tracking-tight leading-none"
          >
            <span className="inline-block">Practice&nbsp;</span>
            <span className="flex flex-col text-shadow-white text-black sm:inline-block">
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
