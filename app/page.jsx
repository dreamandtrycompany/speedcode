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
    <div className="min-h-screen flex flex-col">
      {/* Navbar - Fixed at top */}
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      {/* Main Content Container */}
      <main className="flex-grow">
        {/* Each section is wrapped in a container for consistent padding and max-width */}
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <section className="py-8 md:py-12">
            <FirstSection isSignedIn={isSignedIn} user={user} />
          </section>

          {/* Fifth Section */}
          <section className="py-8 md:py-12">
            <FifthSection />
          </section>

          {/* Second Section */}
          <section className="py-8 md:py-12">
            <SecondSection />
          </section>

          {/* Third Section */}
          <section className="py-8 md:py-12">
            <ThirdSection />
          </section>

          {/* Last Card Section */}
          <section className="py-8 md:py-12">
            <LastCard />
          </section>

          {/* Fourth Section */}
          <section className="py-8 md:py-12">
            <FourthSection />
          </section>

          {/* Testimonials - Commented out but keeping the structure */}
          {/* <section className="py-8 md:py-12">
            <Testimonials />
          </section> */}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-auto">
        <Footer />
      </footer>
    </div>
  );
}