import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Footer = () => {
  return (
    <section>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center font-sans py-10">
          <Link
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 hover:text-[#C23E3E]"
            href={'/about'}
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="https://nextjs.org/icons/file.svg"
              alt="File icon"
              width={16}
              height={16}
            />
            About DATCO.
          </Link>
          <Link
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 hover:text-[#C23E3E]"
            href={'/contact'}
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="https://nextjs.org/icons/window.svg"
              alt="Window icon"
              width={16}
              height={16}
            />
            Contact Us
          </Link>
          <Link
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 hover:text-[#C23E3E]"
            href={'/cookies-policy'}
            rel="noopener noreferrer"
          >
            <Image
              aria-hidden
              src="https://nextjs.org/icons/globe.svg"
              alt="Globe icon"
              width={16}
              height={16}
            />
            Cookies Policy
          </Link>
        </footer>
      </section>
  )
}

export default Footer;