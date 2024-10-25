'use client'
import React from 'react'
import Navbar from '../(components)/Navbar'
import Footer from '../(components)/Footer'
import { useState } from 'react'

const Page = () => {
  const [text, setText] = useState('');
  
  function handleTextChange(e) {
    setText(e.target.value);
  }
  
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className='overflow-y-hidden mt-10 flex-1 w-full'>
        <section className='px-4 sm:px-8 lg:px-16 py-8 sm:py-12 font-sans'>
          {/* Added block and width classes to center the span */}
          <div className="w-full flex justify-center">
            <span className='block text-center text-4xl sm:text-8xl lg:text-8xl mb-8 lg:mb-14'>
              Contact Us
            </span>
          </div>
          
          <div className='flex flex-col lg:flex-row items-center lg:items-start gap-6 lg:gap-9 max-w-7xl mx-auto'>
            {/* Rest of your code remains the same */}
            <div className='w-full lg:w-1/2'>
              <div className='text-center lg:text-left mb-8 text-xl sm:text-2xl lg:text-3xl mt-16'>
                We are DATCO and we are here to serve! <br/>
                How can we help you?
              </div>
              <div className='text-center lg:text-left text-base sm:text-lg lg:text-xl opacity-80'>
                If you have any questions about your account, billing, or
                <span className='inline lg:block'> anything else speedcode related, we're here to help!</span>
              </div>
            </div>

            <div className='w-full lg:w-1/2'>
              <form className='flex flex-col gap-4 max-w-md mx-auto lg:mx-0'>
                <input 
                  type='text' 
                  placeholder='Name' 
                  required 
                  className='w-full p-3 rounded-3xl bg-[#313131] placeholder-gray-400'
                />
                <input 
                  type='email' 
                  placeholder='E-mail' 
                  required 
                  className='w-full p-3 rounded-3xl bg-[#313131] placeholder-gray-400'
                />
                <textarea 
                  value={text}
                  onChange={handleTextChange}
                  placeholder="Type your message here..."
                  rows="4"
                  className='w-full p-4 rounded-3xl bg-[#313131] resize-none placeholder-gray-400'
                />
                <button 
                  type="submit"
                  className='rounded-full font-bold text-white border-2 border-solid border-transparent 
                            flex items-center justify-center text-background gap-2 bg-[#29b960] 
                            text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full lg:w-auto
                            hover:bg-black hover:border-white transition-all duration-300'
                >
                  SEND
                </button>
              </form>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default Page