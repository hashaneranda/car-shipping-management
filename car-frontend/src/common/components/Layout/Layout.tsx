import React from 'react';
import Navbar from '../NavBar/NavBar';
import Footer from '../Footer/Footer';

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className='relative min-h-screen'>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
