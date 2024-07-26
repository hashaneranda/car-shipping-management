import CarStatus from 'common/components/CarStatus/CarStatus';
import { Car } from 'features/car/types';
import React, { useContext, useMemo } from 'react';

// context
import { Context as UserContext } from 'common/context/UserContext';

import { FaTrash, FaEdit } from 'react-icons/fa';

type Props = {
  car: Car;
  onEdit: () => void;
  onDelete: () => void;
};

const CarCard = React.memo(({ car, onEdit, onDelete }: Props) => {
  const { state } = useContext(UserContext);

  const carName = useMemo(() => `${car?.make} ${car?.model} (${car?.year})`, [car]);

  return (
    <div className='max-w-sm mb-5 bg-white rounded-lg shadow-lg h-90'>
      <a href='#'>
        <img
          className='rounded-t-lg'
          src='https://images.pexels.com/photos/112460/pexels-photo-112460.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
          alt=''
        />
      </a>
      <div className='p-5'>
        <a href='#'>
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 '>{carName}</h5>
        </a>
        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
          Status: <CarStatus status={car?.shippingStatus} />
        </p>
        {state?.isAuthenticated && (
          <div className='flex flex-row-reverse pt-3 space-x-5'>
            <a
              href='#'
              className='inline-flex items-center self-end justify-end px-3 py-2 ml-3 text-sm font-medium text-center text-white rounded-lg bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:bg-blue-700'
            >
              Change Status
              <svg
                className='rtl:rotate-180 w-3.5 h-3.5 ms-2'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 14 10'
              >
                <path stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d='M1 5h12m0 0L9 1m4 4L9 9' />
              </svg>
            </a>

            <button
              onClick={onEdit}
              className='p-3 font-bold rounded-full shadow-lg text-primary bg-white-500 bottom-4 right-4 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-opacity-75'
            >
              <FaEdit />
            </button>

            <button
              onClick={onDelete}
              className='p-3 font-bold text-white bg-red-500 rounded-full shadow-lg bottom-4 right-4 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-opacity-75'
            >
              <FaTrash />
            </button>
          </div>
        )}
      </div>
    </div>
  );
});

export default CarCard;
