'use client';

import { useState } from 'react';
import Footer from '../(components)/Footer';
import Navbar from '../(components)/Navbar';
import { saveFaq } from '../../lib/supabase';
// import { FaLocationArrow } from 'react-icons/fa';
// import { MdOutlineKeyboardArrowDown } from "react-icons/md";

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
      setSuccessMessage('Your faq has been saved successfully!');
      setFaq('');
    } catch (error) {
      setErrorMessage('There was an error saving your faq. Please try again.');
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
        'Yes SpeedCode does have a completely free version where you can practice coding and typing without paying any fee to anyone.',
    },
    {
      id: 3,
      question: 'When is the battle feature rolling out?',
      answer:
        'SpeedCode is working on this feature actively and will be letting users know through an official announcement.',
    },
    {
      id: 4,
      question: 'What languages does SpeedCode offer?',
      answer:
        'SpeedCode features Python, Java, C++ as the coding languages as of now, more languages are actively being worked upon.',
    },
    {
      id: 5,
      question: 'Can we track our codes practice progress?',
      answer:
        'Progress tracking is only a feature for the pro version, however you can elevate your coding practice with the free version as well !',
    },
  ];

  return (
    <>
      <Navbar />
      <section className="font-sans mb-8 md:mb-12 lg:mb-20 px-4 md:px-6 lg:px-8 pt-24">
        {/* FAQ Section */}
        <div className="w-full max-w-3xl mx-auto min-h-[50vh]">
          <h1 className="text-center text-4xl md:text-5xl lg:text-7xl py-3 md:py-4 lg:py-5 mb-6 md:mb-8 lg:mb-10">
            FAQs
          </h1>

          {faqItems.map((item) => (
            <div
              className={`border-b py-2 ${
                item.id === faqItems.length ? 'border-b-0' : ''
              }`}
              key={item.id}
            >
              <button
                className="w-full text-left text-lg md:text-xl py-3 md:py-5 pl-3 flex justify-between items-center hover:text-[#707070] transition-colors"
                onClick={() => handleClick(item.id)}
              >
                {item.question}
                <span
                  className={`transform transition-transform duration-300 ${
                    activeIndex === item.id ? 'rotate-180' : ''
                  }`}
                >
                  {/* <MdOutlineKeyboardArrowDown className='text-white'/> */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    height="24px"
                    viewBox="0 -960 960 960"
                    width="24px"
                    fill="#e8eaed"
                  >
                    <path d="m480-340 180-180-57-56-123 123-123-123-57 56 180 180Zm0 260q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q134 0 227-93t93-227q0-134-93-227t-227-93q-134 0-227 93t-93 227q0 134 93 227t227 93Zm0-320Z" />
                  </svg>
                </span>
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ${
                  activeIndex === item.id ? 'max-h-40' : 'max-h-0'
                }`}
              >
                <div className="text-base md:text-lg py-2 pl-3">
                  <p>{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Question Form Section */}
        <div className="w-full max-w-3xl mx-auto px-4 mt-8 md:mt-12 lg:mt-16">
          <h1 className="text-center text-3xl md:text-5xl lg:text-7xl py-3 md:py-4 lg:py-5 mb-6 md:mb-8 lg:mb-10">
            <span>Have any more questions</span>
            <span className="block">for us?</span>
          </h1>

          <form
            className="flex flex-row items-center justify-center gap-3"
            onSubmit={handleSubmit}
          >
            <input
              type="text"
              placeholder="Leave your question here"
              className="rounded-3xl px-6 text-white py-3 md:py-4 bg-[#313131] flex-1 max-w-[350px]"
              value={faq}
              onChange={(e) => setFaq(e.target.value)}
              required
            />
            <button
              type="submit"
              className="border-2 border-white rounded-3xl w-14 h-12 flex items-center justify-center hover:bg-[#29b960] hover:border-[#29b960] transition-all duration-300"
            >
              {isSubmitting ? (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 290 140">
                  <path
                    fill="none"
                    stroke="#FFFFFF"
                    stroke-width="15"
                    stroke-linecap="round"
                    stroke-dasharray="300 385"
                    stroke-dashoffset="0"
                    d="M275 75c0 31-27 50-50 50-58 0-92-100-150-100-28 0-50 22-50 50s23 50 50 50c58 0 92-100 150-100 24 0 50 19 50 50Z"
                  >
                    <animate
                      attributeName="stroke-dashoffset"
                      calcMode="spline"
                      dur="2"
                      values="685;-685"
                      keySplines="0 0 1 1"
                      repeatCount="indefinite"
                    ></animate>
                  </path>
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="24px"
                  viewBox="0 -960 960 960"
                  width="24px"
                  fill="#e8eaed"
                >
                  <path d="M480-440 160-640v400h360v80H160q-33 0-56.5-23.5T80-240v-480q0-33 23.5-56.5T160-800h640q33 0 56.5 23.5T880-720v280h-80v-200L480-440Zm0-80 320-200H160l320 200ZM760-40l-56-56 63-64H600v-80h167l-64-64 57-56 160 160L760-40ZM160-640v440-240 3-283 80Z" />
                </svg>
              )}
              {/* <FaLocationArrow className="text-lg" /> */}
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
