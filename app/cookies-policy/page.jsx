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
              <a
                href="https://speedcode.in"
                className="text-blue-600 hover:text-blue-800 transition-colors"
              >
                SpeedCode by DATCO
              </a>
            </p>
          </div>

          {/* Introduction */}
          <p className="text-lg text-white mb-12 leading-relaxed">
            At SpeedCode by DATCO, we prioritize a smooth and efficient user experience. 
            To facilitate faster session logins and enhance loading speeds, we use cookies.{' '}
            <span className="font-semibold">
              These cookies are strictly used to streamline your login experience and are not shared or sold to third parties.
            </span>
          </p>

          {/* Main Content Sections */}
          <div className="space-y-12">
            {/* What Are Cookies Section */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-4">
                1. What Are Cookies?
              </h2>
              <p className="text-lg text-white leading-relaxed">
                Cookies are small text files that websites store on your device. 
                They can be used to remember user preferences and enable functionalities 
                like quick logins or faster page loads.
              </p>
              <p className="text-lg text-white leading-relaxed mt-4">
                At SpeedCode by DATCO, our cookies are used only to make session logins faster and more convenient, 
                without tracking any additional data or sharing it externally.
              </p>
            </section>

            {/* Our Commitment Section */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-4">
                2. Our Commitment to Privacy
              </h2>
              <p className="text-lg text-white leading-relaxed mb-4">
                SpeedCode by DATCO values your privacy. We only use cookies to enhance your experience by facilitating 
                faster session logins. Here’s what we do and don’t do:
              </p>
              <ul className="list-disc list-inside text-lg text-white space-y-2 pl-4">
                <li>
                  <span className="font-semibold">No Data Selling or Sharing:</span> 
                  We do not sell, share, or misuse any cookie-related data.
                </li>
                <li>
                  <span className="font-semibold">No Tracking:</span> 
                  Our cookies are not used for tracking your activity or browsing habits.
                </li>
                <li>
                  <span className="font-semibold">No Third-Party Cookies:</span> 
                  We do not allow third-party services to place cookies on your device through our site.
                </li>
              </ul>
            </section>

            {/* Session Logins Section */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-4">
                3. Cookies for Faster Session Logins Only
              </h2>
              <p className="text-lg text-white leading-relaxed mb-4">
                The cookies we use are solely to improve your experience by enabling faster session logins. 
                This means that when you visit SpeedCode by DATCO, you can sign in quickly and smoothly.
              </p>
              <p className="text-lg text-white leading-relaxed">
                We ensure these cookies are minimal and used only for the purpose of enhancing your login experience.
              </p>
            </section>

            {/* Changes to This Policy */}
            <section>
              <h2 className="text-3xl font-bold text-white mb-4">
                4. Changes to This Cookies Policy
              </h2>
              <p className="text-lg text-white leading-relaxed">
                As we grow and improve our services, we may update this policy to reflect any new practices. 
                However, our commitment to privacy and responsible cookie usage remains unchanged. 
                Updates will be posted here, so please check back periodically.
              </p>
            </section>

            {/* Contact Section */}
            <section className="bg-background rounded-lg">
              <h2 className="text-3xl font-bold text-white mb-4">
                5. Contact Information
              </h2>
              <p className="text-lg text-white leading-relaxed mb-4">
                For questions or concerns about our Cookies Policy, feel free to reach out:
              </p>
              <div className="space-y-2 text-lg text-white">
                <p>
                  <span className="font-semibold">Email:</span>{' '}
                  <a
                    href="mailto:privacy@datco.com"
                    className="text-blue-600 hover:text-blue-800 transition-colors"
                  >
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
            Thank you for trusting us. Enjoy browsing SpeedCode by DATCO, knowing that your privacy is valued and respected.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CookiesPolicy;
