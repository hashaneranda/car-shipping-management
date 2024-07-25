import React from 'react';
import { useDispatch } from 'react-redux';
import CarList from './components/CarList/CarList';

type Props = {};

export default function Home({}: Props) {
  return (
    <div>
      <CarList />
    </div>
  );
}
