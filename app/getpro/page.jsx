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

        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url('./final-new.png')`,
            backgroundSize: 'contain', // contain to make it responsive
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
          }}
        />

        {/* clickable overlay */}
        <div className="relative z-10 w-full h-full flex items-center justify-center">
          <Link
            href="/payment"
            className="relative cursor-pointer w-[120px] sm:w-[120px] md:w-[120px] lg:w-[120px] h-[300px] sm:h-[400px] md:h-[500px] lg:h-[570px]"
          >
            <div
              className="w-full h-full transition-colors duration-200 rounded-2xl"
              title="Click to proceed"
            />
          </Link>
        </div>

        {/* Footer */}
        <div className="absolute bottom-0 w-full z-20">
          <Footer />
        </div>
      </main>
    </div>
  );
};

export default page;
