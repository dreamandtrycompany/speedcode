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
      className="w-3 h-3" // Added size control
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
    <header className="relative w-full bg-background border-gray-200">
      <nav className="font-sans max-w-7xl mx-auto flex justify-between items-center py-3 px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link href={'/'} className="hover:opacity-80 transition-opacity shrink-0">
          <span className="text-lg sm:text-xl lg:text-2xl font-sans">
            <span className="text-[#29b960] font-extrabold">Speed</span>
            <span className="text-[#C23E3E] font-extrabold">Code</span>
          </span>
        </Link>

        {/* Navigation Links */}
        {isSignedIn && user ? (
          <ul className="flex items-center gap-3 sm:gap-6 lg:gap-8 font-medium text-sm sm:text-base">
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
            <li className="ml-2">
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
          <ul className="flex items-center gap-3 sm:gap-6 lg:gap-8 font-medium text-sm sm:text-base">
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
                <button className="border-2 border-gray-300 rounded-full px-3 py-1 sm:px-4 sm:py-1.5 text-sm hover:bg-[#313131] hover:border-[#313131] hover:text-white transition-all duration-300">
                  Get Pro
                </button>
              </Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
}

export default Navbar;