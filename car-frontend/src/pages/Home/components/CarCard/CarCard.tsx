import CarStatus from 'common/components/CarStatus/CarStatus';
import { Car } from 'features/car/types';
import React from 'react';

type Props = {
  car: Car;
};

const CarCard = React.memo(({ car }: Props) => {
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
          <h5 className='mb-2 text-2xl font-bold tracking-tight text-gray-900 '>
            {' '}
            {car?.make} {car?.model} ({car?.year})
          </h5>
        </a>
        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
          Status: <CarStatus status={car?.shippingStatus} />
        </p>
        <div className='flex flex-row-reverse'>
          <a
            href='#'
            className='inline-flex items-center self-end justify-end px-3 py-2 text-sm font-medium text-center text-white rounded-lg bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 dark:hover:bg-blue-700'
          >
            Read more
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
        </div>
      </div>
    </div>
  );
});

export default CarCard;
