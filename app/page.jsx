'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import { useUser } from '@clerk/clerk-react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

import Navbar from './(components)/Navbar';
import FirstSection from './(components)/FirstSection';
import SecondSection from './(components)/SecondSection';
import ThirdSection from './(components)/ThirdSection';
import FourthSection from './(components)/FourthSection';
import FifthSection from './(components)/FifthSection';
import Testimonials from './(components)/Testimonials';
import LastCard from './(components)/LastCard';
import Footer from './(components)/Footer';

export default function Home() {
  const { isSignedIn, user } = useUser();

  useEffect(() => {
    // Fading in elements on scroll
    const fadeInElements = gsap.utils.toArray('.panel');
    fadeInElements.forEach((element, index) => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          y: 30, // Start position below final position
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          ease: 'back.out(5)',
          scrollTrigger: {
            trigger: element,
            start: 'top+=70% bottom', // Trigger when 65% of the section is scrolled through
            toggleActions: 'play none none reverse',
            onEnter: () => element.classList.add('fade-in'), // Add 'fade-in' class when 65% of the section is visible
            // delay: index * 0.2,
          },
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
      <FirstSection isSignedIn={isSignedIn} user={user} />
      <FifthSection />
      <SecondSection />
      <ThirdSection />
      {/* <Testimonials /> */}
      <LastCard />
      <FourthSection />
      <Footer />
    </>
  );
}