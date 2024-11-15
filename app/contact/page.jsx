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
      <main className="flex-1 w-full flex items-center justify-center px-4 py-8">
        {/* Container for the two columns */}
        <div className="max-w-7xl w-full flex flex-col md:flex-row gap-12 md:gap-24 items-center">
          {/* Left column - Content */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start space-y-8">
            <h1 className="font-sans font-bold text-4xl md:text-6xl lg:text-8xl text-center md:text-left">
              Contact Us
            </h1>
            <div className="space-y-6">
              <h2 className="font-sans text-2xl md:text-3xl lg:text-4xl font-semibold text-center md:text-left">
                We are DATCO and we are here to serve!
                How can we help you?
              </h2>
              <p className="text-lg md:text-xl opacity-80 text-center md:text-left">
                If you have any questions about your account, billing, or anything else speedcode related, we&apos;re here to help!
              </p>
            </div>
          </div>

          {/* Right column - Form */}
          <div className="w-full md:w-1/2 flex items-center justify-center">
            <form 
              className="w-full max-w-md space-y-6"
              onSubmit={handleSubmit}
            >
              <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="w-full p-4 rounded-3xl bg-[#313131] placeholder-gray-400 font-mono"
              />
              <input
                type="email"
                placeholder="E-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-4 rounded-3xl bg-[#313131] placeholder-gray-400 font-mono"
              />
              <textarea
                placeholder="Type your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows="4"
                required
                className="w-full p-4 rounded-3xl bg-[#313131] resize-none placeholder-gray-400 font-mono"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full rounded-full font-bold text-white border-2 border-solid border-transparent 
                        flex items-center justify-center text-background gap-2 bg-[#29b960] 
                        text-sm md:text-base h-12 px-6
                        hover:bg-black hover:border-white transition-all duration-300"
              >
                {isSubmitting ? 'Sending...' : 'SEND'}
              </button>
              
              {successMessage && (
                <p className="text-green-500 text-center">{successMessage}</p>
              )}
              {errorMessage && (
                <p className="text-red-500 text-center">{errorMessage}</p>
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