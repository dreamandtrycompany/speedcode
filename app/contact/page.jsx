'use client';

import React, { useState } from 'react';
import Navbar from '../(components)/Navbar';
import Footer from '../(components)/Footer';
import { saveContactData } from '../../lib/supabase'; // Adjust the path as needed

const Page = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      await saveContactData(name, email, message);
      setSuccessMessage('Your message has been sent successfully!');
      setName('');
      setEmail('');
      setMessage('');
    } catch (error) {
      setErrorMessage(
        'There was an error submitting your message. Please try again.'
      );
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="overflow-y-hidden mt-10 flex-1 w-full">
        <section className="px-4 sm:px-8 lg:px-16 py-8 sm:py-12 font-sans">
          <div className="w-full flex justify-center">
            <span className="font-sans font-bold block text-center text-4xl sm:text-8xl lg:text-8xl mb-8 lg:mb-14">
              Contact Us
            </span>
          </div>

          <div className="flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-9 max-w-7xl mx-auto">
            <div className="w-full lg:w-1/2">
              <div className="text-center lg:text-left mb-8 text-xl sm:text-2xl lg:text-3xl mt-16">
                We are DATCO and we are here to serve! <br />
                How can we help you?
              </div>
              <div className="text-center lg:text-left text-base sm:text-lg lg:text-xl opacity-80">
                If you have any questions about your account, billing, or
                <span className="inline lg:block">
                  {' '}
                  anything else speedcode related, we&apos;re here to help!
                </span>
              </div>
            </div>

            <div className="w-full lg:w-1/2">
              <form
                className="flex flex-col gap-4 max-w-md mx-auto lg:mx-0"
                onSubmit={handleSubmit}
              >
                <input
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="font-mono w-full p-3 rounded-3xl bg-[#313131] placeholder-gray-400"
                />
                <input
                  type="email"
                  placeholder="E-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="font-mono w-full p-3 rounded-3xl bg-[#313131] placeholder-gray-400"
                />
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message here..."
                  rows="4"
                  className="font-mono w-full p-4 rounded-3xl bg-[#313131] resize-none placeholder-gray-400"
                  required
                />
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="rounded-full font-bold text-white border-2 border-solid border-transparent 
                            flex items-center justify-center text-background gap-2 bg-[#29b960] 
                            text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full lg:w-auto
                            hover:bg-black hover:border-white transition-all duration-300"
                >
                  {isSubmitting ? 'Sending...' : 'SEND'}
                </button>
                {successMessage && (
                  <p className="text-green-500 text-center mt-4">
                    {successMessage}
                  </p>
                )}
                {errorMessage && (
                  <p className="text-red-500 text-center mt-4">
                    {errorMessage}
                  </p>
                )}
              </form>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Page;
