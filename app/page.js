'use client';

import Image from 'next/image';
import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import Navbar from './(components)/Navbar';
import FirstSection from './(components)/FirstSection';
import SecondSection from './(components)/SecondSection';
import ThirdSection from './(components)/ThirdSection';
import FourthSection from './(components)/FourthSection';

export default function Home() {
  // code to give scrollTrigger to each section for future animation purposes
  useEffect(() => {

    // complete this code piece or discard this animation effect for time being @chandan
    const sections = gsap.utils.toArray('[data-section]');
    sections.forEach((section) => {
      ScrollTrigger.create({
        trigger: section,
        start: 'top top',
        end: 'bottom bottom',
        snap: {
          snapTo: 1 / sections.length,
          duration: 0.5,
          ease: 'power1.inOut',
        },
      });
    });


    //fading in elements scroll effect 
    const fadeInElements = gsap.utils.toArray('.fade-in');
    fadeInElements.forEach((element, index) => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          y: 30,  // to sttart slightly below final position
          duration: 0.6, 
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top bottom-=100',
            toggleActions: 'play none none reverse',
            // stagger the animations slightly
            delay: index * 0.2,
          }
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>

    
<Navbar />

    <div className = "no-scrollbar">

      <div className="fade-in" data-section>
          <FirstSection />
        </div>
        <div className="fade-in" data-section>
          <SecondSection />
        </div>
        <div className="fade-in" data-section>
          <ThirdSection />
        </div>
        <div className="fade-in" data-section>
          <FourthSection />
        </div>

      <section>
        <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center font-sans py-10">
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
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
            What is SpeedCode?
          </a>
          <a
            className="flex items-center gap-2 hover:underline hover:underline-offset-4"
            href={'/'}
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
            href={'/'}
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
            Go to wearethedat.co
          </a>
        </footer>
      </section>
      </div>
    </>
  );
}
