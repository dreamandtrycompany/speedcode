import React from 'react';

const LastCard = () => {
  return (
    <section className="flex justify-center items-center bg-black p-4 py-20 md:h-[80vh]">
      <div className="flex flex-col items-center text-center text-white space-y-10">
        <h1 className="text-5xl md:text-7xl font-bold font-sans mb-10">
          Discover more of<br/>our products.
        </h1>
        
        <div className="flex flex-col rounded-2xl bg-[#1a1a1a] shadow-xl max-w-[450px] w-full">
          <figure className="flex justify-center items-center rounded-2xl overflow-hidden">
            <img
              src="/banner.png"
              alt="Card Preview"
              className="rounded-t-2xl w-full"
            />
          </figure>
          <div className="flex flex-col p-8 font-sans">
            <div className="text-3xl font-bold text-center text-white pb-6">
              PureText
            </div>
            <div className="text-base text-center text-white">
              A text editor that converts plain text to plag-free text in seconds.
            </div>
            <div className="flex justify-end pt-6">
              <button className="bg-blue-600 text-white w-full font-bold text-lg p-3 rounded-lg hover:bg-blue-800 active:scale-95 transition-transform">
                Try it out!
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LastCard;
