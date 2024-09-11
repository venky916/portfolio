import React from 'react'
import LOGO from '../assests/LOGO1.png'
import { FaLinkedin } from 'react-icons/fa'
import { FaGithub } from 'react-icons/fa'
import { BiLogoGmail } from "react-icons/bi";
const Navbar = () => {
  return (
      <nav className='mb-5 flex flex-shrink-0 items-center justify-between py-6' >
          <div className='flex items-center'>
              <img src={LOGO} alt="LOGO" className='mx-2 w-16 h-auto rounded-full' />
          </div>
          <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
              <FaLinkedin />
              <FaGithub />
              <BiLogoGmail />
          </div>
      </nav>
  )
}

export default Navbar
