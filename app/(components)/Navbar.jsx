'use client';

import React from 'react';
import Link from 'next/link';
import { UserButton, useUser } from '@clerk/clerk-react';

const DotIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      fill="currentColor"
    >
      <path d="M256 512A256 256 0 1 0 256 0a256 256 0 1 0 0 512z" />
    </svg>
  );
};

const CustomPage = () => {
  return (
    <div>
      <h1>Custom Profile Page</h1>
      <p>This is the custom profile page</p>
    </div>
  );
};

function Navbar() {
  const { isSignedIn, user } = useUser();

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex justify-evenly md:justify-between items-center py-5 px-4">
        {/* Logo */}
        <Link href={'/'} className="hover:opacity-80 transition-opacity">
          <span className="text-2xl font-sans">
            <span className="text-[#29b960] font-extrabold">Speed</span>
            <span className="text-[#C23E3E] font-extrabold">Code</span>
          </span>
        </Link>

        {/* Navigation Links */}
        {isSignedIn && user ? (
          <ul className="flex items-center gap-4 sm:gap-12 font-bold font-sans">
            <li>
              <Link
                href={'/faqs'}
                className="hover:text-[#313131] transition-colors"
              >
                FAQs
              </Link>
            </li>
            <li>
              <Link
                href={'/about'}
                className="hover:text-[#313131] transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <UserButton>
                <UserButton.UserProfilePage
                  label="Custom Page"
                  url="custom"
                  labelIcon={<DotIcon />}
                >
                  <CustomPage />
                </UserButton.UserProfilePage>
                <UserButton.UserProfileLink
                  label="Homepage"
                  url="/"
                  labelIcon={<DotIcon />}
                />
                <UserButton.UserProfilePage label="account" />
                <UserButton.UserProfilePage label="security" />
              </UserButton>
            </li>
          </ul>
        ) : (
          <ul className="flex items-center gap-4 sm:gap-12 font-bold font-sans">
            <li>
              <Link
                href={'/faqs'}
                className="hover:text-[#313131] transition-colors"
              >
                FAQs
              </Link>
            </li>
            <li>
              <Link
                href={'/about'}
                className="hover:text-[#313131] transition-colors"
              >
                About
              </Link>
            </li>
            <li>
              <Link href={'/getpro'}>
                <button className="border-2 border-white rounded-3xl px-5 py-2 hover:bg-[#313131] hover:border-[#313131] transition-all duration-300">
                  Get Pro
                </button>
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
