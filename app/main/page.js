import React from 'react';
import Navbar from '../(components)/Navbar';
import Footer from '../(components)/Footer';

const Page = () => {
  return (
    <>
      <Navbar />
<div className = "overflow-y-hidden">
      <div className="justify-center flex items-center mt-[9rem]">
        <div className="font-sans w-[50vw] h-[60vh] bg-[#1f1f1f] p-10 rounded-4xl">
          <span className="text-xl">1. Bubble Sort</span>
        </div>
      </div>

      <div className="justify-center flex items-center p-6">
        <div className="p-12">
          <button className="font-sans bg-[#29b960] hover:bg-[#134d29] hover:border-[#134d29] transition-all duration-300 rounded-full p-5 text-white">
            Start Selected
          </button>
        </div>
        
        <div className="p-12">
          <button className="font-sans bg-[#29b960] hover:bg-[#134d29] hover:border-[#134d29] transition-all duration-300  rounded-full p-5 text-white">
            Start Random
          </button>
        </div>
      </div>
      </div>
    </>
  );
};

export default Page;
