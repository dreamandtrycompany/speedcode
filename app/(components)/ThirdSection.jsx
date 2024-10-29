'use client';

import React, { useState } from 'react';

const ThirdSection = () => {
  const [hovered, setHovered] = useState(null);

  const handleHover = (version) => {
    setHovered(version);
  };

  const handleMouseLeave = () => {
    setHovered(null);
  };

  const features = [
    'Coding Practice',
    'Multiple Languages',
    '1v1 Live Battle',
    'Global Leaderboard',
  ];

  return (
    <section
      className="panel font-sans min-h-screen w-full flex justify-center items-center p-4 sm:p-6 md:p-8"
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-full max-w-6xl mx-auto overflow-x-auto">
        {/* Desktop Table View */}
        <div className="hidden sm:block relative">
          {/* Column glow containers */}
          <div className="absolute inset-0 flex">
            <div className="w-1/3" /> {/* Spacer for first column */}
            <div className="w-1/3 relative">
              <div
                className={`absolute inset-0 transition-opacity duration-300 mx-4
                  ${hovered === 'free' ? 'opacity-100' : 'opacity-0'}
                `}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  boxShadow: `
                    inset 0 0 20px rgba(255, 255, 255, 0.3),
                    inset 0 0 40px rgba(255, 255, 255, 0.2),
                    0 0 20px rgba(255, 255, 255, 0.2),
                    0 0 40px rgba(255, 255, 255, 0.15),
                    0 0 60px rgba(255, 255, 255, 0.1)
                  `,
                  borderRadius: '16px',
                }}
              />
            </div>
            <div className="w-1/3 relative">
              <div
                className={`absolute inset-0 transition-opacity duration-300 mx-4
                  ${hovered === 'pro' ? 'opacity-100' : 'opacity-0'}
                `}
                style={{
                  background: 'rgba(255, 255, 255, 0.03)',
                  boxShadow: `
                    inset 0 0 20px rgba(255, 255, 255, 0.3),
                    inset 0 0 40px rgba(255, 255, 255, 0.2),
                    0 0 20px rgba(255, 255, 255, 0.2),
                    0 0 40px rgba(255, 255, 255, 0.15),
                    0 0 60px rgba(255, 255, 255, 0.1)
                  `,
                  borderRadius: '16px',
                }}
              />
            </div>
          </div>

          <table className="w-full border-separate border-spacing-0 relative">
            <thead>
              <tr>
                <th className="p-6 text-left w-1/3">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold">
                    Compare
                    <br />
                    Versions
                  </h2>
                </th>
                <th
                  className="p-6 w-1/3 relative transition-all duration-300"
                  onMouseEnter={() => handleHover('free')}
                >
                  <h3 className="relative z-10 text-2xl sm:text-3xl md:text-4xl text-white font-bold">
                    SpeedCode
                    <br />
                    Free
                  </h3>
                </th>
                <th
                  className="p-6 w-1/3 relative transition-all duration-300"
                  onMouseEnter={() => handleHover('pro')}
                >
                  <h3 className="relative z-10 text-2xl sm:text-3xl md:text-4xl text-white font-bold">
                    SpeedCode
                    <br />
                    Pro
                  </h3>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((feature, index) => (
                <tr key={index}>
                  <td className="p-6 text-white text-lg">{feature}</td>
                  <td
                    className="p-6 relative transition-all duration-300"
                    onMouseEnter={() => handleHover('free')}
                  >
                    <div className="flex justify-center relative z-10">
                      <div
                        className={`w-4 h-4 rounded-full 
                          ${index === 0 ? 'bg-[#29b960]' : 'bg-[#C23E3E]'}`}
                      />
                    </div>
                  </td>
                  <td
                    className="p-6 relative transition-all duration-300"
                    onMouseEnter={() => handleHover('pro')}
                  >
                    <div className="flex justify-center relative z-10">
                      <div className="w-4 h-4 rounded-full bg-[#29b960]" />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile View remains unchanged */}
        <div className="sm:hidden px-5">
          <h2 className="text-2xl text-white font-bold mb-8 text-center">
            Compare Versions
          </h2>

          <div className="space-y-12">
            <div className="space-y-6">
              <h3 className="text-xl text-white font-bold text-center mb-4">
                SpeedCode Free
              </h3>
              {features.map((feature, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-white">{feature}</span>
                  <div
                    className={`w-4 h-4 rounded-full 
                      ${index === 0 ? 'bg-[#29b960]' : 'bg-[#C23E3E]'}`}
                  />
                </div>
              ))}
            </div>

            <div className="space-y-6">
              <h3 className="text-xl text-white font-bold text-center mb-4">
                SpeedCode Pro
              </h3>
              {features.map((feature, index) => (
                <div key={index} className="flex justify-between items-center">
                  <span className="text-white">{feature}</span>
                  <div className="w-4 h-4 rounded-full bg-[#29b960]" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ThirdSection;
