'use client';

import { useState } from 'react';
import Footer from '../(components)/Footer';
import Navbar from '../(components)/Navbar';
import { saveFaq } from '../../lib/supabase';

const Page = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [faq, setFaq] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setSuccessMessage('');
    setErrorMessage('');

    try {
      await saveFaq(faq);
      setSuccessMessage('Your FAQ has been saved successfully!');
      setFaq('');
    } catch (error) {
      setErrorMessage('There was an error saving your FAQ. Please try again.');
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const faqItems = [
    {
      id: 1,
      question: 'Does SpeedCode have a pro subscription?',
      answer: 'Yes, SpeedCode does have a minimal fee pro version.',
    },
    {
      id: 2,
      question: 'Is SpeedCode completely free?',
      answer:
        'Yes, SpeedCode does have a completely free version where you can practice coding and typing without paying any fee.',
    },
    {
      id: 3,
      question: 'When is the battle feature rolling out?',
      answer:
        'SpeedCode is actively working on this feature and will announce it officially.',
    },
    {
      id: 4,
      question: 'What languages does SpeedCode offer?',
      answer:
        'SpeedCode features Python, Java, and C++ as coding languages, with more being developed.',
    },
    {
      id: 5,
      question: 'Can we track our coding practice progress?',
      answer:
        'Progress tracking is available in the pro version, but you can still practice effectively using the free version!',
    },
  ];

  return (
    <>
      <Navbar />
      <section className="font-sans mb-6 md:mb-10 lg:mb-14 px-4 md:px-6 lg:px-8 pt-20">
        {/* FAQ Section */}
        <div className="w-full max-w-2xl mx-auto min-h-[50vh]">
          <h1 className="font-bold text-center text-3xl md:text-4xl lg:text-5xl py-2 md:py-3 lg:py-4 mb-4 md:mb-6 lg:mb-8">
            Frequently Asked Questions
          </h1>

          {faqItems.map((item) => (
            <div className="border-b py-2 last:border-b-0" key={item.id}>
              <button
                className="w-full text-left text-lg md:text-base lg:text-xl py-2 md:py-4 pl-3 flex justify-between items-center hover:text-gray-500 transition-colors"
                onClick={() => handleClick(item.id)}
              >
                {item.question}
                <span
                  className={`transform transition-transform duration-300 ${
                    activeIndex === item.id ? 'rotate-180' : ''
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="20px"
                    viewBox="0 -960 960 960"
                    width="20px"
                    fill="#e8eaed"
                  >
                    <path d="m480-340 180-180-57-56-123 123-123-123-57 56 180 180Z" />
                  </svg>
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  activeIndex === item.id ? 'max-h-40' : 'max-h-0'
                }`}
              >
                <div className="font-mono text-sm md:text-base py-2 pl-3">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Question Form Section */}
        <div className="w-full max-w-2xl mx-auto px-4 mt-6 md:mt-8 lg:mt-10">
          <h1 className="font-bold text-center text-2xl md:text-4xl lg:text-5xl py-2 md:py-3 lg:py-4 mb-4 md:mb-6 lg:mb-8">
            Have any more questions for us?
          </h1>

          <form
            className="flex flex-row items-center justify-center gap-3"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Leave your question here"
              className="rounded-3xl px-4 py-2 md:py-3 bg-[#313131] flex-1 text-sm md:text-base text-white max-w-[320px]"
              value={faq}
              onChange={(e) => setFaq(e.target.value)}
              required
            />
            <button
              type="submit"
              className="border-2 border-white rounded-3xl w-12 h-12 flex items-center justify-center hover:bg-[#29b960] hover:border-[#29b960] transition-all duration-300"
            >
              {isSubmitting ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 290 140"
                  height="20"
                  width="20"
                >
                  <path
                    fill="none"
                    stroke="#FFFFFF"
                    strokeWidth="10"
                    strokeLinecap="round"
                    strokeDasharray="300 385"
                    strokeDashoffset="0"
                    d="M275 75c0 31-27 50-50 50-58 0-92-100-150-100-28 0-50 22-50 50s23 50 50 50c58 0 92-100 150-100 24 0 50 19 50 50Z"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      dur="2s"
                      values="685;-685"
                      repeatCount="indefinite"
                    />
                  </path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="20px"
                  viewBox="0 -960 960 960"
                  width="20px"
                  fill="#e8eaed"
                >
                  <path d="M480-440 160-640v400h360v80H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v280h-80v-200L480-440Z" />
                </svg>
              )}
            </button>
          </form>
        </div>
        {successMessage && (
          <p className="text-green-500 text-center mt-4">{successMessage}</p>
        )}
        {errorMessage && (
          <p className="text-red-500 text-center mt-4">{errorMessage}</p>
        )}
      </section>
      <Footer />
    </>
  );
};

export default Page;
