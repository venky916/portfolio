import React from 'react';
import LOGO from '../assests/LOGO1.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { BiLogoGmail } from 'react-icons/bi';

const Navbar = () => {
  // Function to handle icon clicks
  const handleIconClick = (url) => {
    window.open(url, '_blank'); // Opens the URL in a new tab
  };

  return (
    <nav className="mb-5 flex flex-shrink-0 items-center justify-between py-6">
      <div className="flex items-center">
        <img
          src={LOGO}
          alt="LOGO"
          className="mx-2 w-16 h-auto rounded-full cursor-pointer"
        />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        {/* LinkedIn Icon */}
        <FaLinkedin
          className="cursor-pointer hover:text-blue-500"
          onClick={() =>
            handleIconClick('https://www.linkedin.com/in/Venkatesh-Maliga')
          }
        />
        {/* GitHub Icon */}
        <FaGithub
          className="cursor-pointer hover:text-gray-400"
          onClick={() => handleIconClick('https://github.com/venky916')}
        />
        {/* Gmail Icon */}
        <BiLogoGmail
          className="cursor-pointer hover:text-red-500"
          onClick={() => handleIconClick('mailto:venkateshsmsv1999@gmail.com')}
        />
      </div>
    </nav>
  );
};

export default Navbar;
