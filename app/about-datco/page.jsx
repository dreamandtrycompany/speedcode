import React from 'react';
import Navbar from '../(components)/Navbar';
import Footer from '../(components)/Footer';

const page = () => {
  return (
    <div className="min-h-screen bg-background font-sans text-white">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
        <div className="bg-background shadow-sm rounded-lg p-6 sm:p-8">
          {/* Header Section */}
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-center text-white mb-8 sm:mb-12">
            About DATCO (Dream and Try Company)
          </h1>

          {/* Introduction */}
          <section className="mb-12">
            <p className="text-base sm:text-lg text-white leading-relaxed">
              DATCO, short for Dream and Try Company/Community, is a vibrant
              tech group founded by four friends in college. United by a shared
              passion for innovation and problem-solving, this team isn&apos;t just
              about completing projects—it&apos;s about creating, learning, and
              having fun along the way. With the collaborative efforts, DATCO
              emerged from their collective desire to transform bold ideas into
              real-world applications that everyone can have fun building and
              learning.
            </p>
          </section>

          {/* SpeedCode Project Section */}
          <section className="mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6">
              SpeedCode: Making Coding Social and Interactive
            </h2>
            <p className="text-base sm:text-lg text-white leading-relaxed">
              SpeedCode, one of DATCO&apos;s flagship projects, is a platform
              designed to make coding more interactive, competitive, and social.
              It brings developers together in real-time through features like
              1v1 live coding battles, a global leaderboard, and practice
              challenges across various programming languages. More than just
              coding in isolation, SpeedCode creates an environment where
              developers can connect, learn, and compete while improving their
              skills. Whether you&apos;re a beginner or an experienced developer,
              SpeedCode transforms routine practice into an engaging experience.
            </p>
          </section>

          {/* AI Exploration Section */}
          <section className="mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6">
              Exploring Variety of Fields
            </h2>
            <p className="text-base sm:text-lg text-white leading-relaxed">
              DATCO&apos;s vision extends beyond SpeedCode. The team is actively
              exploring artificial intelligence, machine learning, diving into
              innovative projects that integrate AI in meaningful and impactful
              ways. With AI&apos;s vast potential, DATCO is committed to developing
              solutions that are not only technologically advanced but also make
              a tangible difference in people&apos;s lives.
            </p>
          </section>

          {/* Collaboration and Idea Sharing Section */}
          <section className="mb-12">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6">
              Collaboration and Idea Sharing
            </h2>
            <p className="text-base sm:text-lg text-white leading-relaxed">
              Collaboration and idea-sharing form the foundation of DATCO&apos;s
              philosophy. The group welcomes people to pitch their project
              ideas, whether they&apos;re academic initiatives to enhance a portfolio
              or real-world solutions addressing specific challenges. DATCO
              doesn&apos;t simply offer assistance—they become true collaborators,
              working alongside you to transform visions into reality. Through
              teamwork, constructive feedback, and a hands-on approach, DATCO
              provides a unique environment for building projects more
              efficiently and effectively than working alone.
            </p>
          </section>

          {/* Community-Focused Section */}
          <section className="mb-12 last:mb-0">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-4 sm:mb-6">
              Building a Community
            </h2>
            <p className="text-base sm:text-lg text-white leading-relaxed">
              At its core, DATCO is about community. The team values not just
              the final product, but the entire journey—the collaborative
              process, the personal growth, and the shared excitement of
              innovation. Whether you have an idea for an academic project, a
              coding challenge, or an ambitious tech solution, DATCO is ready to
              dream, try, and build with you. Here, you&apos;ll find more than
              technical support; you&apos;ll join a creative, collaborative team that
              celebrates every milestone of the journey—always with an emphasis
              on enjoying the process.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;