"use client"
import React from 'react'
import Link from 'next/link'

function Navbar(){
  return (
    <div>
        <nav className="flex justify-between py-5 fixed top-0 left-0 w-full">
        <Link href={'/'}>
        <span className="font-extrabold px-5 text-xl font-sans">SC</span>
        </Link>
        <ul className="flex gap-12 justify-center items-center font-bold font-sans px-5">
          <li>
            <Link href={'/'}>FAQs</Link>
          </li>
          <li>
            <Link href={'/'}>Contact</Link>
          </li>
          <li>
            <Link href="/login">
            <button className="border-2 border-white rounded-3xl px-5 py-2">
              Login
            </button>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar