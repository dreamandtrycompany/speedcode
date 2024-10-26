'use client';

import { useState } from 'react';
import Footer from '../(components)/Footer';
import Navbar from '../(components)/Navbar';
import { FaLocationArrow } from 'react-icons/fa';
import { MdOutlineKeyboardArrowDown } from "react-icons/md";


const Page = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    { id: 1, question: 'What is SpeedCode?', answer: 'This is SpeedCode.' },
    { id: 2, question: 'What is SpeedCode?', answer: 'This is SpeedCode.' },
    { id: 3, question: 'What is SpeedCode?', answer: 'This is SpeedCode.' },
    { id: 4, question: 'What is SpeedCode?', answer: 'This is SpeedCode.' },
    { id: 5, question: 'What is SpeedCode?', answer: 'This is SpeedCode.' },
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
                  <MdOutlineKeyboardArrowDown className='text-white'/>

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

          <form className="flex flex-row items-center justify-center gap-3">
            <input
              type="text"
              placeholder="Leave your question here"
              className="rounded-3xl px-6 text-white py-3 md:py-4 bg-[#313131] flex-1 max-w-[350px]"
            />
            <button
              type="submit"
              className="border-2 border-white rounded-3xl w-14 h-12 flex items-center justify-center hover:bg-[#29b960] hover:border-[#29b960] transition-all duration-300"
            >
              <FaLocationArrow className="text-lg" />
            </button>
          </form>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Page;
