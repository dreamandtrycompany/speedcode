'use client';

import React from 'react';
import Link from 'next/link';
import { UserButton } from '@clerk/clerk-react';

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

function AuthNavbar() {
  return (
    <nav className="sticky top-0 left-0 w-full bg-background backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-5 px-4">
        {/* Logo */}
        <Link href={'/'} className="hover:opacity-80 transition-opacity">
          <span className="text-2xl font-sans">
            <span className="text-[#29b960] font-extrabold">Speed</span>
            <span className="text-[#C23E3E] font-extrabold">Code</span>
          </span>
        </Link>

        {/* Navigation Links */}
        <ul className="flex items-center gap-4 sm:gap-12 font-bold font-sans">
          <li>
            <Link
              href={'/faqs'}
              className="hover:text-[#313131] transition-colors"
            >
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
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default AuthNavbar;
