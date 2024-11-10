import React from 'react';
import Navbar from '../(components)/Navbar';
import Footer from '../(components)/Footer';

const page = () => {
  return (
    <div className="min-h-screen bg-background font-sans text-white">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="bg-background shadow-sm rounded-lg p-8">
          {/* Header Section */}
          <h1 className="text-4xl sm:text-5xl font-bold text-center text-white mb-14">
            About SpeedCode
          </h1>

          {/* main content*/}
          <div className="space-y-12 text-lg text-white leading-relaxed">
            {/* About SpeedCode */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-4">SpeedCode</h2>
              <p>
                SpeedCode is crafted to bridge the gap between traditional
                typing practice and the real-world needs of programmers. While
                typical typing sites focus on words and sentences, SpeedCode
                shifts the focus to typing actual code. This includes handling
                various programming languages, syntax, and structures, making it
                a specialized platform for developers who want to optimize their
                coding speed, accuracy, and familiarity with common code
                patterns.
              </p>
            </section>

            {/* purpose*/}
            <section>
              <h2 className="text-3xl font-bold text-white mb-4">
                Purpose and Core Advantage
              </h2>
              <p>
                The idea behind SpeedCode is that coding isn’t only about
                problem-solving; it’s also about maintaining a fast and accurate
                flow, especially in time-critical environments. SpeedCode
                addresses this by allowing developers to practice typing in real
                coding environments, which is essential for productivity and
                precision.
              </p>
            </section>

            {/* platofrm tiers */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-4">
                Platform Features and Tiers
              </h2>
              <div className="pl-4 space-y-4">
                <h3 className="text-2xl font-semibold text-[#29b960]">
                  SpeedCode Free
                </h3>
                <p>
                  This version is tailored for those who are either new to
                  coding or want to strengthen foundational typing skills within
                  a coding framework. It includes:
                </p>
                <ul className="list-disc list-inside">
                  <li>
                    <span className="font-semibold">
                      Basic Coding Exercises:
                    </span>{' '}
                    Exercises that improve speed and accuracy on standard code
                    syntax, making it easier for users to transition to real
                    coding scenarios.
                  </li>
                </ul>

                <h3 className="text-2xl font-semibold text-[#C23E3E]">
                  SpeedCode Pro
                </h3>
                <p>
                  For users looking to enhance their coding abilities further,
                  SpeedCode Pro builds on the Free tier with more advanced,
                  engaging features:
                </p>
                <ul className="list-disc list-inside">
                  <li>
                    <span className="font-semibold">
                      Multilingual Code Practice:
                    </span>{' '}
                    Practice typing in various programming languages to cater to
                    versatile developers.
                  </li>
                  <li>
                    <span className="font-semibold">1v1 Live Battles:</span>{' '}
                    Challenge others in real-time coding battles, blending
                    learning and competition.
                  </li>
                  <li>
                    <span className="font-semibold">Global Leaderboard:</span>{' '}
                    Compete globally to track progress and improvements.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Performance Analytics:
                    </span>{' '}
                    Receive detailed stats on speed, accuracy, and progression.
                  </li>
                </ul>
              </div>
            </section>

            {/* mission */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-4">
                Mission and Audience
              </h2>
              <p>
                SpeedCode’s mission is rooted in making efficient coding
                accessible to everyone, from beginners to professionals. It
                encourages an engaging and growth-oriented community where users
                not only improve their coding speed but also become more precise
                and comfortable with real code structures. By joining SpeedCode,
                users become part of a growing network focused on enhancing the
                productivity and skill level of developers worldwide.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
