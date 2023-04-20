import React, { useState } from 'react';
import LOGO from '../assets/main-logo.png';
import { RxTextAlignRight, RxCross2 } from 'react-icons/rx';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [right, setRight] = useState('translate-x-96');
  const handleClick = () => {
    setIsOpen(() => !isOpen);
    setRight(() =>
      right === 'translate-x-96' ? 'translate-x-0' : 'translate-x-96'
    );
  };

  return (
    <div id="header" className="flex items-center justify-between">
      <div className="w-32">
        <a href="/">
          <img src={LOGO} alt="" className="w-full" />
        </a>
      </div>

      <button
        className="fixed  right-4 top-4 z-30 text-4xl md:hidden"
        onClick={handleClick}
      >
        {isOpen ? <RxCross2 className="text-gray-900" /> : <RxTextAlignRight />}
      </button>

      <nav
        className={`fixed right-0 top-0 z-20 flex h-screen w-2/4 ${right} flex-col items-center justify-center bg-gray-50 px-3 py-6 text-gray-900 transition-all duration-500 ease-in-out md:hidden`}
      >
        <div className="flex h-40 flex-col items-center justify-around font-medium">
          <a href="#about" className="transition-all hover:text-amber-300">
            About me
          </a>
          <a href="#services" className="transition-all hover:text-amber-300">
            Services
          </a>
          <a href="#contact" className="transition-all hover:text-amber-300">
            Contact me
          </a>
        </div>
      </nav>

      <nav className="hidden space-x-10 md:block">
        <a href="#about" className="transition-all hover:text-amber-300">
          About me
        </a>
        <a href="#services" className="transition-all hover:text-amber-300">
          Services
        </a>
        <a href="#contact" className="transition-all hover:text-amber-300">
          Contact me
        </a>
      </nav>
    </div>
  );
};

export default Navbar;
