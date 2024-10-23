import React from 'react';

const SecondSection = () => {
  return (
    <section data-section="two" className="h-screen">
      <div className="flex flex-col justify-center items-center">
        <p className="font-sans text-[10rem] align-center font-extrabold">
          <span className="text-shadow-white text-black">For </span>{' '}
          <span>coders,</span>
        </p>
        <p className="font-sans text-[10rem] align-center font-extrabold">
          <span>by </span>{' '}
          <span className="text-shadow-white text-black">coders.</span>
        </p>
      </div>
    </section>
  );
};

export default SecondSection;
