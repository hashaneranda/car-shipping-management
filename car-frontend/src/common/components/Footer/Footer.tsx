import React, { useEffect, useRef, useState } from 'react';

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const [isOverflowing, setIsOverflowing] = useState(false);

  useEffect(() => {
    const checkOverflow = () => {
      if (footerRef.current) {
        setIsOverflowing(footerRef.current.scrollHeight > window.innerHeight);
      }
    };

    checkOverflow();
    window.addEventListener('resize', checkOverflow);

    return () => {
      window.removeEventListener('resize', checkOverflow);
    };
  }, []);

  return (
    <div
      className={`bottom-0 grid grid-cols-1 gap-5 px-8 pt-5 pb-5 text-justify bg-white shadow-lg md:grid-cols-2 md:gap-10 lg:grid-cols-4 lg:gap-5 ${isOverflowing ? 'relative' : 'lg:absolute'}`}
    >
      <div>
        <h2 className='inline-flex font-poppins font-[400] text-2xl'>
          <span className='font-[900]'>CAR</span>Managment
        </h2>
        <p className='my-5 text-slate-500'>
          We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs.
        </p>
        <p>&#9742; +971 xxxx xxxx</p>
        <p className='mt-1'>&#9993; car-managment@test.com</p>
      </div>

      <div>
        <h2 className='text-2xl font-[800] mb-3'>COMPANY</h2>
        <ul className='space-y-2'>
          <li>Careers</li>
          <li>How we work</li>
        </ul>
      </div>

      <div>
        <h2 className='text-2xl font-[800] mb-3'>WORKING HOURS</h2>
        <ul className='space-y-2'>
          <li>Mon - Fri: 9:00AM - 9:00PM</li>
          <li>Sat: 9:00AM - 1:00PM</li>
          <li>Sun: Closed</li>
        </ul>
      </div>

      <div className='space-y-4'>
        <h2 className='text-2xl font-[800]'>SUBSCRIPTION</h2>
        <p>Subscribe your Email address for latest news & updates.</p>
      </div>
    </div>
  );
};

export default Footer;
