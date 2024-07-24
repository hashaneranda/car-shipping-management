import React, { useState } from 'react';
// import {logo,close,menu} from "../assets";

import { FaReact, FaBreadSlice, FaCross } from 'react-icons/fa';
// import Button from './Button';
import NavList from './components/NavList/NavList';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const [toggle, setToggle] = useState(true);

  return (
    <nav className='flex flex-row items-center justify-between w-full py-5'>
      <div className='flex flex-row flex-shrink-0 mx-2' onClick={() => navigate('/')}>
        <FaReact size={100} className='text-blue-500' />
        {/* <img src={FaReact} alt='hoobank' className="w-[85px]"/> */}
        <p className='ml-3 mt-3 flex flex-col font-poppins text-black leading-3 font-[600] text-[20px]'>
          <span className='font-[900] text-3xl'>CAR</span>Managment
        </p>
      </div>

      <ul className='hidden items-center space-x-8 font-[600] text-sm lg:flex'>
        <NavList />{' '}
      </ul>

      <div className='flex-shrink-0 hidden lg:flex lg:mr-5'>
        <a href='#' className='px-10 py-3 text-lg font-semibold hover:text-reddish'>
          Sign In
        </a>
        {/* <Button text="Register" width="px-10"/> */}
      </div>

      <div className='lg:hidden'>
        <div className='w-[40px] mx-5' onClick={() => setToggle(prev => !prev)}>
          {toggle ? <FaBreadSlice size={100} className='text-blue-500' /> : <FaCross size={100} className='text-blue-500' />}
        </div>

        <ul
          className={`absolute ${toggle ? 'hidden' : 'flex'} flex-col items-center py-8 mt-10 space-y-6 font-bold bg-white top-14 left-6 right-6 drop-shadow-md sm:w-auto sm:self-center`}
        >
          <NavList />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
