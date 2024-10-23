'use client';

import React, { useState } from 'react';

const ThirdSection = () => {
  const [hovered, setHovered] = useState(null);
  const handleHover = (version) => {
    setHovered(version);
  };
  return (
    <section data-section="three" className="font-sans flex justify-center items-center h-screen relative">
      {/* Animated background div */}
      <div
        className={`absolute rounded-5xl top-[28vh] left-1/3.5 w-[25vh] h-[40vh] bg-[#131313] transition-transform duration-500 ease-in-out ${
          hovered === 'free'
            ? 'transform translate-x-0'
            : hovered === 'pro'
            ? 'transform translate-x-full'
            : ''
        }`}
        style={{ zIndex: -1 }}
      ></div>

      <div className="grid grid-cols-3 grid-rows-7 gap-4 relative w-[75vh]">
        {/* Headings (Row span 2) */}
        <div className="flex-col text-3xl text-white flex items-center justify-center p-4 row-span-2">
          <span>Comapare</span>Versions
        </div>

        {/* SpeedCode Free - Hover triggers background movement */}
        <div
          className="flex-col text-3xl text-white flex items-center justify-center p-4 row-span-2 relative z-10"
          onMouseEnter={() => handleHover('free')}
        >
          <span>SpeedCode</span>Free
        </div>

        {/* SpeedCode Pro - Hover triggers background movement */}
        <div
          className="flex-col text-3xl text-white flex items-center justify-center p-4 row-span-2 relative z-10"
          onMouseEnter={() => handleHover('pro')}
        >
          <span>SpeedCode</span>Pro
        </div>

        {/* Content boxes (Row span 5) */}
        <div className="text-white flex items-center justify-center p-4 row-span-5">
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li className="mb-8 flex items-center">
              <div className="w-4 h-4 rounded-full mr-2"></div>
              Coding Practice
            </li>
            <li className="mb-8 flex items-center">
              <div className="w-4 h-4 rounded-full mr-2"></div>
              Multiple Languages
            </li>
            <li className="mb-8 flex items-center">
              <div className="w-4 h-4 rounded-full mr-2"></div>
              1v1 Live Battle
            </li>
            <li className="mb-8 flex items-center">
              <div className="w-4 h-4 rounded-full mr-2"></div>
              Global Leaderboard
            </li>
          </ul>
        </div>

        <div
          className="text-white flex items-center justify-center p-4 row-span-5"
          onMouseEnter={() => handleHover('free')}
        >
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <div className="mb-8 bg-[#29b960] w-4 h-4 rounded-full mr-2"></div>
            <li className="mb-8 flex justify-center items-center">
              <div className="bg-[#C23E3E] w-4 h-4 rounded-full mr-2"></div>
            </li>
            <li className="mb-8 flex justify-center items-center">
              <div className="bg-[#C23E3E] w-4 h-4 rounded-full mr-2"></div>
            </li>
            <li className="mb-8 flex justify-center items-center">
              <div className="bg-[#C23E3E] w-4 h-4 rounded-full mr-2"></div>
            </li>
          </ul>
        </div>

        <div
          className="text-white flex items-center justify-center p-4 row-span-5"
          onMouseEnter={() => handleHover('pro')}
        >
          <ul style={{ listStyle: 'none', padding: 0 }}>
            <li className="mb-8 flex justify-center items-center">
              <div className="bg-[#29b960] w-4 h-4 rounded-full mr-2"></div>
            </li>
            <li className="my-8 flex justify-center items-center">
              <div className="bg-[#29b960] w-4 h-4 rounded-full mr-2"></div>
            </li>
            <li className="my-8 flex justify-center items-center">
              <div className="bg-[#29b960] w-4 h-4 rounded-full mr-2"></div>
            </li>
            <li className="my-8 flex justify-center items-center">
              <div className="bg-[#29b960] w-4 h-4 rounded-full mr-2"></div>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
