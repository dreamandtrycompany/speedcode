'use client';

import React from 'react';
import Link from 'next/link';
import Navbar from '../(components)/Navbar';
import Footer from '../(components)/Footer';

const page = () => {
  return (
    <div>
      <main className="relative w-full h-screen overflow-hidden">
        <link rel="icon" href="/favicon.ico" />
        <Navbar />
        <h5 className='font-sans text-white justify-center items-center text-center absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>The pro subscription is currently on hold, please try back later.</h5>
        <div className="absolute bottom-0 w-full z-20">
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default page;
