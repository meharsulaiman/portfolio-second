import React from 'react';
import { useInView } from 'react-intersection-observer';

const Services = () => {
  const { ref, inView } = useInView();
  return (
    <div
      ref={ref}
      id="services"
      className={`flex  flex-col flex-wrap items-center justify-center gap-4 p-5`}
    >
      <h1 className="mb-1 text-center text-4xl font-bold">What i do</h1>
      <div
        className={`flex flex-wrap items-center justify-center gap-4 ${
          inView ? 'animate-to-right' : ''
        }`}
      >
        <div className="flex h-40 w-36 flex-col items-center justify-center rounded-md  bg-gray-800 text-gray-400">
          <div className="mb-4 text-5xl">
            <i className="fa-brands fa-uncharted"></i>
          </div>
          <h1>
            Software
            <br />
            Development
          </h1>
        </div>
        <div className="flex h-40 w-36 flex-col items-center justify-center  rounded-md bg-gray-800 text-gray-400">
          <div className="mb-4 text-5xl">
            <i className="fa-brands fa-uncharted"></i>
          </div>
          <h1>
            Web
            <br />
            Development
          </h1>
        </div>
        <div className="flex h-40 w-36 flex-col items-center justify-center  rounded-md bg-gray-800 text-gray-400">
          <div className="mb-4 text-5xl">
            <i className="fa-solid fa-pen-nib"></i>
          </div>
          <h1>
            Web
            <br />
            Design
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Services;
