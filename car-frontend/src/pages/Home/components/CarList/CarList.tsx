import React, { forwardRef, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';

import { fetchCarListStart, fetchCarListReset } from 'features/car/carSlice';

import { Virtuoso, VirtuosoGrid } from 'react-virtuoso';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { RootState } from 'app/rootReducer';
import CarCard from '../CarCard/CarCard';
import { Car } from 'features/car/types';
import { PrimaryButton } from 'common/components/Button/Button';
import GridRenderer from '../GridRenderer/GridRenderer';

const CarFilterSchema = Yup.object().shape({
  make: Yup.string(),
  model: Yup.string(),
  year: Yup.number(),
  shippingStatus: Yup.string(),
});

const inputfeildStyle = 'w-full px-3 py-2 border input-field md:w-fit rounded-xl';

const CarList: React.FC = () => {
  const dispatch = useDispatch();
  const carList = useSelector((state: RootState) => state.car.carList);
  const [page, setPage] = useState(1);
  const [limit] = useState(20);
  const [filters, setFilters] = useState({ make: '', model: '', year: '', shippingStatus: '' });

  const [dataContainer, setDataContainer] = useState<Car[]>([]);

  useEffect(() => {
    if (carList.data?.data) {
      const newCarList = carList.data?.data || [];

      let tempContainer = [...newCarList, ...dataContainer];
      tempContainer = _.uniqBy(tempContainer, '_id');
      setDataContainer(tempContainer);
    }
  }, [carList.data?.data]);

  useEffect(() => {
    dispatch(fetchCarListStart({ page, ...filters, limit }));
    // return () => {
    //   dispatch(fetchCarListReset());
    // };
  }, [dispatch, page]);

  useEffect(() => {
    if (filters?.make || filters?.model || filters?.year || filters?.shippingStatus) {
      dispatch(fetchCarListStart({ page, ...filters, limit }));
      setDataContainer([]);
    }
  }, [filters?.make, filters?.model, filters?.year, filters?.shippingStatus]);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleFilter = (values: any) => {
    setFilters(values);
    setPage(1);
  };

  const ItemWrapper = ({ children, ...props }: any) => (
    <div
      {...props}
      style={{
        display: 'flex',
        flex: 1,
        textAlign: 'center',
        padding: '1rem 1rem',
        border: '1px solid gray',
        whiteSpace: 'nowrap',
      }}
    >
      {children}
    </div>
  );

  const gridComponents: any = {
    List: forwardRef<any, any>(({ style, children, ...props }, ref) => (
      <div ref={ref} {...props} className='flex flex-wrap'>
        {children}
      </div>
    )),
    Item: ({ children, ...props }: any) => (
      <div {...props} className='md:w-[33%] p-5 sm:w-[50%] w-full items-stretch'>
        {children}
      </div>
    ),
  };

  return (
    <div className='container p-4 mx-auto'>
      <Formik initialValues={filters} validationSchema={CarFilterSchema} onSubmit={handleFilter}>
        {() => (
          <Form className='flex flex-col flex-wrap items-center  gap-2 mb-4 md:flex-row justify-start  w-[90%] px-2'>
            <Field name='make' placeholder='Make' className={inputfeildStyle} />
            <Field name='model' placeholder='Model' className={inputfeildStyle} />
            <Field as='select' name='year' className={inputfeildStyle}>
              <option value=''>Year</option>å{/* Add options for years */}
              {[...Array(30)].map((_, i) => {
                const year = 1995 + i;
                return (
                  <option key={year} value={year}>
                    {year}
                  </option>
                );
              })}
            </Field>
            <Field as='select' name='shippingStatus' className={inputfeildStyle}>
              <option value=''>Shipping Status</option>
              <option value='pending'>Pending</option>
              <option value='shipped'>Shipped</option>
              <option value='delivered'>Delivered</option>
            </Field>
            <PrimaryButton type='submit'>Filter</PrimaryButton>
          </Form>
        )}
      </Formik>

      {carList.loading && <div>Loading...</div>}
      {carList.error && <div>Error: {carList.error}</div>}

      <GridRenderer
        data={dataContainer || []}
        endReached={loadMore}
        dataLength={carList.data?.count}
        renderItem={({ index }: { index: number }) => <CarCard car={dataContainer[index]} key={index} />}
        overscan={100}
      />
    </div>
  );
};

export default CarList;
