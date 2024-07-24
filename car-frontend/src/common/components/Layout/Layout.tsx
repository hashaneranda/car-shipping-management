import React from 'react';
import Navbar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className='min-h-[100vh] relative'>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
