'use client';
import React from 'react';

const FourthSection = () => {
  const codeString = `def pascals_triangle(n):
    triangle = [[1]]
    for i in range(1, n):
        row = [1]
        for j in range(1, i):
            row.append(triangle[i-1][j-1] 
            + triangle[i-1][j])
        row.append(1)
        triangle.append(row)
    return triangle`;

  return (
    <section data-section="four" className="h-screen w-full flex items-center p-4 sm:p-6 md:p-8 lg:p-12">
      <div className="w-full">
        <pre 
          className="font-sans font-extrabold text-white text-opacity-30 
                     text-sm sm:text-lg md:text-2xl lg:text-4xl xl:text-6xl 
                     p-4 sm:p-5 md:p-6 lg:p-8 
                     rounded-lg overflow-x-auto
                     whitespace-pre-wrap break-words
                     transition-all duration-300
                     bg-background backdrop-blur-sm"
        >
          <code className="block font-mono">
            {codeString}
          </code>
        </pre>
      </div>
      <style jsx>{`
        pre {
          tab-size: 4;
          -moz-tab-size: 4;
          -o-tab-size: 4;
          scrollbar-width: thin;
          scrollbar-color: rgba(255, 255, 255, 0.1) transparent;
        }
        pre::-webkit-scrollbar {
          width: 8px;
          height: 8px;
        }
        pre::-webkit-scrollbar-track {
          background: transparent;
        }
        pre::-webkit-scrollbar-thumb {
          background-color: rgba(255, 255, 255, 0.1);
          border-radius: 4px;
        }
        code {
          display: block;
          line-height: 1.125;
        }
        @media (max-width: 640px) {
          code {
            line-height: 1.125; 
            letter-spacing: 0.02em;
          }
        }
      `}</style>
    </section>
  );
};

export default FourthSection;