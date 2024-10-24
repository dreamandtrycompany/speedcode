import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <section>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center font-sans py-10">
          <a
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
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 hover:text-[#C23E3E]"
            href={'/contact'}
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
            Contact Us
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4 hover:text-[#C23E3E]"
            href={'/cookies-policy'}
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
            Cookies Policy
          </a>
        </footer>
      </section>
  )
}

export default Footer