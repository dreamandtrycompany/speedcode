'use client';

import React, { useState } from 'react';
import Navbar from '../(components)/Navbar';
import Footer from '../(components)/Footer';
import { saveContactData } from '../../lib/supabase';

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
      setErrorMessage('There was an error submitting your message. Please try again.');
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 w-full flex items-center justify-center px-4 py-6">
        {/* Container for the two columns */}
        <div className="max-w-6xl w-full flex flex-col md:flex-row gap-8 md:gap-16 items-center">
          {/* Left column - Content */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start space-y-6">
            <h1 className="font-sans font-bold text-3xl md:text-5xl lg:text-6xl text-center md:text-left">
              Contact Us
            </h1>
            <div className="space-y-4">
              <h2 className="font-sans text-xl md:text-2xl lg:text-3xl font-semibold text-center md:text-left">
                We are DATCO and we are here to serve! How can we help you?
              </h2>
              <p className="text-base md:text-lg opacity-80 text-center md:text-left">
                If you have any questions about your account, billing, or anything else speedcode related, we&apos;re here to help!
              </p>
            </div>
          </div>

          {/* Right column - Form */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <form 
              className="w-full max-w-sm space-y-4"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full p-3 rounded-2xl bg-[#313131] placeholder-gray-400 font-mono text-sm"
              />
              <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-3 rounded-2xl bg-[#313131] placeholder-gray-400 font-mono text-sm"
              />
              <textarea
                placeholder="Type your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="4"
                required
                className="w-full p-3 rounded-2xl bg-[#313131] resize-none placeholder-gray-400 font-mono text-sm"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full font-bold text-white border-2 border-solid border-transparent 
                        flex items-center justify-center text-background gap-2 bg-[#29b960] 
                        text-sm md:text-base h-10 px-5
                        hover:bg-black hover:border-white transition-all duration-300"
              >
                {isSubmitting ? 'Sending...' : 'SEND'}
              </button>
              
              {successMessage && (
                <p className="text-green-500 text-center text-sm">{successMessage}</p>
              )}
              {errorMessage && (
                <p className="text-red-500 text-center text-sm">{errorMessage}</p>
              )}
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Page;
