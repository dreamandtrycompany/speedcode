'use client';

import React from 'react'
import Link from 'next/link'

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-background backdrop-blur-sm">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-5 px-4">
        {/* Logo */}
        <Link href={'/'} className="hover:opacity-80 transition-opacity">
          <span className="font-extrabold text-xl font-sans">SC</span>
        </Link>
        
        {/* Navigation Links */}
        <ul className="flex items-center gap-12 font-bold font-sans">
          <li>
            <Link 
              href={'/faqs'} 
              className="hover:text-[#29b960] transition-colors"
            >
              FAQs
            </Link>
          </li>
          <li>
            <Link 
              href={'/contact'} 
              className="hover:text-[#29b960] transition-colors"
            >
              Contact
            </Link>
          </li>
          <li>
            <Link href="/login">
              <button className="border-2 border-white rounded-3xl px-5 py-2 hover:bg-[#29b960] hover:border-[#29b960] transition-all duration-300">
                Login
              </button>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar