import React from 'react';
import Navbar from '../(components)/Navbar';
import Footer from '../(components)/Footer';

const CookiesPolicy = () => {
  return (
    <div className="min-h-screen bg-background font-sans text-white">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="bg-background shadow-sm rounded-lg p-8">
          {/* Header Section */}
          <h1 className="text-4xl sm:text-5xl font-bold text-center text-white mb-14">
            Cookies Policy for SpeedCode by DATCO
          </h1>
          
          {/* Metadata Section */}
          <div className="space-y-4 mb-12 text-white">
            <p className="text-lg">
              <span className="font-semibold">Effective Date:</span> 23rd October, 2024
            </p>
            <p className="text-lg">
              <span className="font-semibold">Parent Company:</span> DATCO (Dream and Try Company Pvt. Ltd.)
            </p>
            <p className="text-lg">
              <span className="font-semibold">Website:</span>{' '}
              <a href="https://speedcode.in" className="text-blue-600 hover:text-blue-800 transition-colors">
                SpeedCode by DATCO
              </a>
            </p>
          </div>

          {/* Introduction */}
          <p className="text-lg text-white mb-12 leading-relaxed">
            At SpeedCode by DATCO, we are committed to protecting your privacy and ensuring transparency regarding the data we collect and how we use it. This Cookies Policy outlines our practices regarding the use of cookies on our website. However, we want to be completely clear and reassuring:{' '}
            <span className="font-semibold">we do not collect, use, or track any cookies</span>
            —not from our users, visitors, or third parties.
          </p>

          {/* Main Content Sections */}
          <div className="space-y-12">
            {/* What Are Cookies Section */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-4">1. What Are Cookies?</h2>
              <p className="text-lg text-white leading-relaxed">
                Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit most websites. Cookies are commonly used to retain user preferences, store information for things like shopping carts, and provide anonymized tracking data to third-party applications like Google Analytics.
              </p>
              <p className="text-lg text-white leading-relaxed mt-4">
                However, at SpeedCode by DATCO, we do not utilize cookies in any form. Our website is designed to be free from any cookie-based tracking or data collection.
              </p>
            </section>

            {/* Our Commitment Section */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-4">2. Our Commitment: No Cookies, No Tracking</h2>
              <p className="text-lg text-white leading-relaxed mb-4">
                We value your privacy and believe in a user experience that does not rely on unnecessary data collection. Therefore, SpeedCode by DATCO does not engage in any of the following:
              </p>
              <ul className="list-disc list-inside text-lg text-white space-y-2 pl-4">
                <li><span className="font-semibold">Storing Cookies:</span> We do not store cookies on your device when you visit our website.</li>
                <li><span className="font-semibold">Tracking User Activity:</span> We do not track, analyze, or store any information about your behavior or actions on our site through cookies or similar technologies.</li>
                <li><span className="font-semibold">Third-Party Cookies:</span> We do not use any third-party services that place cookies on your device for analytics, advertising, or any other purpose.</li>
              </ul>
            </section>

            {/* third section */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-4">3. No Functional, Performance, or Advertising Cookies</h2>
              <p className="text-lg text-white leading-relaxed mb-4">
              To provide further clarity, we do not use any of the following types of cookies:
              </p>
              <ul className="list-disc list-inside text-lg text-white space-y-2 pl-4">
                <li><span className="font-semibold">Strictly Necessary Cookies:</span>Although these are typically used to ensure basic functionality of a site, we have designed our site to function without them.</li>
                <li><span className="font-semibold">Performance and Analytics Cookies:</span> We do not gather performance data or usage patterns through any form of analytics cookies.</li>
                <li><span className="font-semibold">Targeting or Advertising Cookies: </span>We do not participate in any targeted advertising, and therefore do not collect data to personalize ads or marketing content.</li>
              </ul>
            </section>

            {/* 4th section */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-4">4. How We Handle Data</h2>
              <p className="text-lg text-white leading-relaxed">
              Although we do not use cookies, we may collect personal information through other means, such as when you voluntarily submit forms (e.g., for account registration or customer support). This data is handled according to our [Privacy Policy], which you can access [here]. However, any personal information collected is not tied to cookies, as we do not use them.
              </p>
            </section>


            {/* 5th section */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-4">5. Managing Cookies</h2>
              <p className="text-lg text-white leading-relaxed mb-4">
              Since we do not use cookies, there is no need to manage cookie settings or preferences for our site. You can browse SpeedCode by DATCO without worrying about cookies being stored on your device. However, if you wish to control cookies on other websites, you can do so by adjusting your browser settings. Most modern web browsers allow users to:
              </p>
              <ul className="list-disc list-inside text-lg text-white space-y-2 pl-4">
                <li><span className="font-semibold">Block cookies from specific websites.</span></li>
                <li><span className="font-semibold">Delete cookies that have already been set.</span></li>
                <li><span className="font-semibold">Opt for a ‘Do Not Track’ mode, which some websites honor.</span></li>
              </ul>
            </section>

            {/* 6th section */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-4">6. Changes to This Cookies Policy</h2>
              <p className="text-lg text-white leading-relaxed">
              As a company committed to transparency and user privacy, we may update this policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. However, our commitment to not using cookies will remain the same unless explicitly stated otherwise. Any updates to this policy will be posted here, and the date of the most recent change will be listed at the top of the policy.
              </p>
            </section>


            {/* Contact Section */}
            <section className="bg-background rounded-lg">
              <h2 className="text-3xl font-bold text-white mb-4">7. Contact Information</h2>
              <p className="text-lg text-white leading-relaxed mb-4">
                If you have any questions or concerns regarding this Cookies Policy or our privacy practices, please feel free to contact us:
              </p>
              <div className="space-y-2 text-lg text-white">
                <p>
                  <span className="font-semibold">Email:</span>{' '}
                  <a href="mailto:privacy@datco.com" className="text-blue-600 hover:text-blue-800 transition-colors">
                    privacy@datco.com
                  </a>
                </p>
                <p>
                  <span className="font-semibold">Address:</span> DATCO, Steel City, Visakhapatnam, India.
                </p>
              </div>
            </section>
          </div>

          {/* Footer Note */}
          <p className="text-lg text-white mt-12 text-center italic">
            We appreciate your trust in us and hope you enjoy using SpeedCode by DATCO with confidence, knowing that your privacy is respected.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CookiesPolicy;