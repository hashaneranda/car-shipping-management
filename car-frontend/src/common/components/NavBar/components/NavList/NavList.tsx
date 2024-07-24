import React from 'react';
import { useNavigate } from 'react-router-dom';

const NavList = () => {
  const navigate = useNavigate();

  return (
    <>
      <li className='cursor-pointer hover:text-reddish' onClick={() => navigate('/')}>
        Home
      </li>
      <li className='cursor-pointer hover:text-reddish' onClick={() => navigate('/about')}>
        About
      </li>
      <li className='cursor-pointer hover:text-reddish' onClick={() => navigate('/vehicles')}>
        Vehicles
      </li>
    </>
  );
};

export default NavList;
