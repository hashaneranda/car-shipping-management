import React, { forwardRef, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import _ from 'lodash';

import { fetchCarListStart, fetchCarListReset, deleteCarStart, deleteCarReset } from 'features/car/carSlice';

import { Virtuoso, VirtuosoGrid } from 'react-virtuoso';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { RootState } from 'app/rootReducer';
import CarCard from '../CarCard/CarCard';
import { Car } from 'features/car/types';
import { PrimaryButton } from 'common/components/Button/Button';
import GridRenderer from '../GridRenderer/GridRenderer';
import DeleteGuardModal from 'common/components/Modal/DeleteGuardModal';
import { errorNoty, successNoty } from 'common/components/Notification/Notification';
import { useNavigate } from 'react-router-dom';
import socket, { initSocket } from 'services/socketService';

const CarFilterSchema = Yup.object().shape({
  make: Yup.string(),
  model: Yup.string(),
  year: Yup.number(),
  shippingStatus: Yup.string(),
});

const inputfeildStyle = 'w-full px-3 py-2 border input-field md:w-fit rounded-xl';

const CarList: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const carList = useSelector((state: RootState) => state.car.carList);
  const deletedCar = useSelector((state: RootState) => state.car?.deletedCar);

  const [showDeletGuard, setShowDeletGuard] = useState<boolean>(false);
  const [selectedCar, setSelectedCar] = useState<Car>();

  const [page, setPage] = useState(1);
  const [limit] = useState(20);

  const [filters, setFilters] = useState({ make: '', model: '', year: '', shippingStatus: '' });

  const [dataContainer, setDataContainer] = useState<Car[]>([]);

  const selectedCarName = useMemo(
    () => (selectedCar ? `${selectedCar?.make} ${selectedCar?.model} (${selectedCar?.year})` : 'car'),
    [selectedCar],
  );

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

    initSocket(dispatch);

    return () => {
      socket.off('update');
    };
  }, [dispatch, page]);

  useEffect(() => {
    if (filters?.make || filters?.model || filters?.year || filters?.shippingStatus) {
      dispatch(fetchCarListStart({ page, ...filters, limit }));
      setDataContainer([]);
    }
  }, [filters?.make, filters?.model, filters?.year, filters?.shippingStatus]);

  useEffect(() => {
    if (deletedCar?.data) {
      successNoty({ msg: `${selectedCarName} Deleted Successfully!` });
      handleCloseDeleteModal();
      dispatch(deleteCarReset());
    }
  }, [deletedCar?.data]);

  useEffect(() => {
    if (deletedCar?.error) {
      errorNoty({ msg: 'Something went wrong! Please try again.' });
      handleCloseDeleteModal();
      dispatch(deleteCarReset());
    }
  }, [deletedCar?.error]);

  const loadMore = () => {
    setPage(prevPage => prevPage + 1);
  };

  const handleFilter = (values: any) => {
    setFilters(values);
    setPage(1);
  };

  const handleCloseDeleteModal = () => {
    setShowDeletGuard(false);
    setSelectedCar(undefined);
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
      {carList.error && <div>Error: {carList.error?.data?.message}</div>}

      {carList.data && (
        <GridRenderer
          data={dataContainer || []}
          endReached={loadMore}
          dataLength={carList.data?.count}
          renderItem={({ index }: { index: number }) => (
            <CarCard
              car={dataContainer[index]}
              key={index}
              onDelete={() => {
                setShowDeletGuard(true);
                setSelectedCar(dataContainer[index]);
              }}
              onEdit={() => {
                navigate('/car/edit', { state: { car: dataContainer[index] } });
              }}
            />
          )}
          overscan={100}
        />
      )}

      <DeleteGuardModal
        type={selectedCar ? `${selectedCar?.make} ${selectedCar?.model} (${selectedCar?.year})` : 'car'}
        isOpen={showDeletGuard}
        handleClose={() => handleCloseDeleteModal()}
        successAction={() => dispatch(deleteCarStart(selectedCar?._id ?? ''))}
      />
    </div>
  );
};

export default CarList;
