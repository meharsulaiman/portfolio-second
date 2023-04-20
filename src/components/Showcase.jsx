import React from 'react';

const Showcase = ({ title, value, iconProp, link }) => {
  return (
    <div className="flex h-40 w-36 flex-col items-center justify-center  rounded-md bg-gray-800 text-gray-400">
      <a href={link}>
        <div className="flex h-1/2 items-center justify-center text-center text-4xl">
          <i className={`${iconProp} mb-4`}></i>
        </div>
        <div className="mt-2 text-center">
          <h3>{title}</h3>
          <p>{value}</p>
        </div>
      </a>
    </div>
  );
};

export default Showcase;
