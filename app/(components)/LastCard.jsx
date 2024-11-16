import React from 'react';
import Image from 'next/image';

const LastCard = () => {
  return (
    <section className="min-h-screen flex justify-center items-center bg-black p-3 py-16 md:h-[75vh]">
      <div className="flex flex-col items-center text-center text-white space-y-8">
        <h1 className="block-appear text-4xl md:text-6xl font-bold font-sans mb-8">
          Discover more of
          <br />
          our products.
        </h1>

        <div className="block-slide-in-left flex flex-col rounded-xl bg-[#1a1a1a] shadow-xl max-w-[400px] w-full">
          <figure className="flex justify-center items-center rounded-xl overflow-hidden">
            <Image
              src="/banner.png"
              alt="Card Preview"
              className="rounded-t-xl w-full"
              width={600}
              height={350}
              priority
            />
          </figure>
          <div className="flex flex-col p-6 font-sans">
            <div className="text-2xl font-bold text-center text-white pb-4">
              PureText
            </div>
            <div className="text-sm text-center text-white">
              A text editor that converts plain text to plag-free text in
              seconds.
            </div>
            <div className="flex justify-end pt-5">
              <button className="bg-blue-600 text-white w-full font-bold text-base p-2.5 rounded-lg hover:bg-blue-800 active:scale-95 transition-transform">
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