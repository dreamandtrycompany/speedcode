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
