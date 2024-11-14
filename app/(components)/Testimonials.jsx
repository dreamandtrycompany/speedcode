import React from 'react';

const Testimonials = () => {
  const testimonials = [
    'This platform has transformed the way I work.',
    'I absolutely love the design and user experience!',
    'Fantastic tool! Makes my daily tasks so much easier.',
    "Reliable and efficient - I can't recommend it enough.",
    'The support team is incredibly helpful and responsive.',
    'Great value for the price, with a ton of useful features.',
    'The setup was a breeze, and I was up and running in minutes.',
    'Highly customizable, which is perfect for my needs.',
    "One of the best investments I've made for my business.",
  ];

  return (
    <section className="h-screen bg-black p-4">
      <span className="text-center font-sans font-bold text-2xl text-white p-4">
        Here are some of our reviews
      </span>

      <div class="grid grid-cols-3 xl:grid-cols-3 gap-4 px-4 py-8">
        <div class="w-full h-48 bg-[#1a1a1a] rounded-xl"></div>
        <div class="w-full h-48 bg-[#1a1a1a] rounded-xl col-span-2"></div>
        <div class="w-full h-48 bg-[#1a1a1a] rounded-xl col-span-2"></div>
        <div class="w-full h-48 bg-[#1a1a1a] rounded-xl"></div>
        <div class="w-full h-48 bg-[#1a1a1a] rounded-xl"></div>
        <div class="w-full h-48 bg-[#1a1a1a] rounded-xl col-span-2"></div>
      </div>
    </section>
  );
};

export default Testimonials;
