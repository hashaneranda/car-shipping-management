import React from 'react';
import { useDispatch } from 'react-redux';
import CarList from './components/CarList/CarList';
import Fab from 'common/components/Fab/Fab';
import { useNavigate } from 'react-router-dom';

type Props = {};

export default function Home({}: Props) {
  const navigate = useNavigate();

  return (
    <div>
      <CarList />
      <Fab onClick={() => navigate('/car/add')} />
    </div>
  );
}
