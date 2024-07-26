import React, { useContext, useState } from 'react';

// context
import { Context as UserContext } from 'common/context/UserContext';

import { FaReact } from 'react-icons/fa';
import { MdOutlineMenu, MdClose } from 'react-icons/md';
// import Button from './Button';
import NavList from './components/NavList/NavList';
import { Link, useNavigate } from 'react-router-dom';
import { PrimaryButton } from '../Button/Button';
import { useDispatch } from 'react-redux';
import { userSliceReset } from 'features/user/userSlice';

const Navbar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [toggle, setToggle] = useState(true);

  const userData = useContext(UserContext);
  const isAuthenticated = userData?.state?.isAuthenticated;
  const user = userData?.state?.user ?? {};

  const handleLogout = () => {
    userData.logout();
    dispatch(userSliceReset());
  };

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

      {isAuthenticated ? (
        <div className='flex-shrink-0 hidden lg:flex lg:mr-5'>
          <div className='flex flex-col mr-8'>
            <p className='font-normal text-gray-700'>Hello</p>
            <p className='text-2xl font-bold text-gray-900'> {user?.name || 'Guest'}</p>
          </div>

          <PrimaryButton onClick={() => handleLogout()}>Logout</PrimaryButton>
        </div>
      ) : (
        <div className='flex-shrink-0 hidden lg:flex lg:mr-5'>
          <Link className='px-10 py-3 text-lg font-semibold hover:text-reddish' to={'login'}>
            Sign In
          </Link>

          <PrimaryButton onClick={() => navigate('/register')}>Register</PrimaryButton>
        </div>
      )}

      <div className='lg:hidden'>
        <div className='w-[40px] mx-5  mr-12' onClick={() => setToggle(prev => !prev)}>
          {toggle ? <MdOutlineMenu size={50} className='text-blue-500' /> : <MdClose size={50} className='text-blue-500' />}
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
