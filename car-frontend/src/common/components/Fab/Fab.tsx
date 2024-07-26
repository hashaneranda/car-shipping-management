import React from 'react';
import { IoMdAdd } from 'react-icons/io';

interface FabProps {
  onClick: () => void;
}

const Fab: React.FC<FabProps> = ({ onClick }) => (
  <button
    onClick={onClick}
    className='fixed p-6 font-bold text-white bg-blue-500 rounded-full shadow-lg bottom-4 right-4 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75'
  >
    <IoMdAdd />
  </button>
);

export default Fab;
