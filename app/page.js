'use client';

import Navbar from './(components)/Navbar';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const [hovered, setHovered] = useState(null);
  const handleHover = (version) => {
    setHovered(version);
  };

  return (
    <>
      <Navbar/>
      <section className="h-screen">
        <div className="flex justify-center items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-sans">
          <main className="flex flex-col gap-8 items-center">
            <span className="font-bold text-8xl">SpeedCode</span>
            <div className="flex gap-4 justify-around items-center flex-col sm:flex-row">
              <Link
                className="rounded-full font-bold text-white border border-solid border-transparent transition-colors flex items-center justify-center text-background gap-2 bg-[#29b960] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
                href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Sign Up
              </Link>
              <Link
                className="rounded-full font-bold text-white border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center bg-[#C23E3E] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
                href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
                target="_blank"
                rel="noopener noreferrer"
              >
                Get Pro
              </Link>
            </div>
          </main>
        </div>
      </section>

      <section className="h-screen flex flex-col justify-center items-center">
        <p className="font-sans text-[10rem] align-center font-extrabold">
          <span className="text-shadow-white text-black">For </span>{' '}
          <span>coders,</span>
        </p>
        <p className="font-sans text-[10rem] align-center font-extrabold">
          <span>by </span>{' '}
          <span className="text-shadow-white text-black">coders.</span>
        </p>
      </section>

      <section className="font-sans flex justify-center items-center h-screen relative">
        {/* Animated background div */}
        <div
          className={`absolute rounded-3xl top-[28vh] left-1/3.5 w-[25vh] h-[40vh] bg-[#232329] transition-transform duration-500 ease-in-out ${
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
            <ul style={{ listStyle: 'none' }}>
              <li className="mb-8">Coding Practice</li>
              <li className="my-8">Multiple Languages</li>
              <li className="my-8">1v1 Live Battle</li>
              <li className="my-8">Global Leaderboard</li>
            </ul>
          </div>

          <div className="text-white flex items-center justify-center p-4 row-span-5">
            <ul style={{ listStyle: 'none' }}>
              <li className="mb-8">✅</li>
              <li className="my-8">❌</li>
              <li className="my-8">❌</li>
              <li className="my-8">❌</li>
            </ul>
          </div>
          <div className="text-white flex items-center justify-center p-4 row-span-5">
            <ul style={{ listStyle: 'none' }}>
              <li className="mb-8">✅</li>
              <li className="my-8">✅</li>
              <li className="my-8">✅</li>
              <li className="my-8">✅</li>
            </ul>
          </div>
        </div>
      </section>

      <section>
        <pre className="font-sans font-extrabold text-white text-opacity-30 text-6xl p-5 rounded-lg overflow-x-hidden">
          <code>
            {`
def pascals_triangle(n):
    triangle = [[1]]
    for i in range(1, n):
        row = [1]
        for j in range(1, i):
            row.append(triangle[i-1][j-1] 
            + triangle[i-1][j])
        row.append(1)
        triangle.append(row)
    return triangle
  `}
          </code>
        </pre>
      </section>

      <section>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center font-sans py-10">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="https://nextjs.org/icons/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            What is SpeedCode?
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="https://nextjs.org/icons/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            About DATCO.
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="https://nextjs.org/icons/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Go to wearedat.co
          </a>
        </footer>
      </section>
    </>
  );
}
