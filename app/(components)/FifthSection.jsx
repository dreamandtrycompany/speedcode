import React from 'react';

const FifthSection = () => {
  return (
    <section className="py-24 px-4 md:px-8 lg:px-20 font-sans">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-white mb-32 font-bold text-4xl sm:text-5xl md:text-7xl lg:text-9xl tracking-tight">
          Why use SpeedCode?
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="border-4 border-[#1a1a1a] rounded-4xl p-14 hover:bg-[#1a1a1a] hover:border-none h-[45vh] flex flex-col justify-center items-center hover:shadow-neon-white transition-shadow duration-300">
            <div>
              <h2 className="text-white font-bold text-4xl mb-6">Fun Of Typing</h2>
              <p className="text-gray-400 text-lg">
              Don't fall behind! In the world of coding, speed is essential. With SpeedCode, keep your fingers dancing across the keyboard to ensure your code remains blazing fast!
              </p>
            </div>
          </div>

          <div className="border-4 border-[#1a1a1a] rounded-4xl p-14 hover:bg-[#1a1a1a] hover:border-none h-[45vh] flex flex-col justify-center items-center hover:shadow-neon-white transition-shadow duration-300">
            <h2 className="text-white font-bold text-4xl mb-6">Mixed With Coding</h2>
            <p className="text-gray-400 text-lg">
            Coding is undeniably awesome, but typing speed is the secret ingredient that sets you apart! With SpeedCode, you're not just mastering syntax; you're transforming into a coding ninja, effortlessly
            </p>
          </div>

          <div className="border-4 border-[#1a1a1a] rounded-4xl p-14 hover:bg-[#1a1a1a] hover:border-none h-[45vh] flex flex-col justify-center items-center hover:shadow-neon-white transition-shadow duration-300">
            <h2 className="text-white font-bold text-4xl mb-6">Boost Coding Speed and Accuracy</h2>
            <p className="text-gray-400 text-lg">
            SpeedCode helps developers improve both typing speed and accuracy by providing real-time feedback. This is ideal for reducing errors and increasing efficiency in daily coding tasks.
            </p>
          </div>

          <div className="border-4 border-[#1a1a1a] rounded-4xl p-14 hover:bg-[#1a1a1a] hover:border-none h-[45vh] flex flex-col justify-center items-center hover:shadow-neon-white transition-shadow duration-300">
            <h2 className="text-white font-bold text-4xl mb-6">Muscle Memory for Coding Syntax</h2>
            <p className="text-gray-400 text-lg">
            Practicing with SpeedCode reinforces syntax muscle memory, making it easier to type complex code effortlessly. This helps users retain syntax better and code faster over time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FifthSection;
