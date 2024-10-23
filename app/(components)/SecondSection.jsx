'use client';

import React from 'react';

const SecondSection = () => {
  return (
    <section data-section="two" className="h-screen w-full">
      <div className="flex flex-col justify-center items-center min-h-screen px-4 py-8 md:py-12 lg:py-16">
        {/* First Line */}
        <div className="text-center whitespace-nowrap mb-2 sm:mb-4 md:mb-6">
          <p className="font-sans font-extrabold
            text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem]
            tracking-tight leading-none">
            <span className="text-shadow-white text-black inline-block">Code with</span>
            <span className="inline-block">&nbsp;purpose,</span>
          </p>
        </div>

        {/* Second Line */}
        <div className="text-center whitespace-nowrap">
          <p className="font-sans font-extrabold
            text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl 2xl:text-[10rem]
            tracking-tight leading-none">
            <span className="inline-block">Practice</span>
            <span className="text-shadow-white text-black inline-block">&nbsp;with speed.</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;