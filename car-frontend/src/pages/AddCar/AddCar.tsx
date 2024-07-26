import React, { useContext, useEffect } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

// context
import { Context as UserContext } from 'common/context/UserContext';

import TextFeild from 'common/components/FormHelper/TextFeild';
import { initialState, shippingStatusList, validations } from './utils/formHelper';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { RootState } from 'app/rootReducer';

import { errorNoty, successNoty } from 'common/components/Notification/Notification';
import DropDownFeild from 'common/components/FormHelper/DropDownFeild';
import { createCarStart, createCarReset, updateCarStart, updateCarReset } from 'features/car/carSlice';

type IAddCarType = {
  isEdit?: boolean;
};

const AddCar: React.FC<IAddCarType> = ({ isEdit }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { state } = useLocation();

  const createdCar = useSelector((state: RootState) => state.car?.createdCar);
  const updatedCar = useSelector((state: RootState) => state.car?.updatedCar);

  useEffect(() => {
    if (createdCar?.data) {
      successNoty({ msg: 'Car Added Successfully!' });
      navigate('/');
    }
    if (updatedCar?.data) {
      successNoty({ msg: 'Car Updated Successfully!' });
      navigate('/');
    }

    return () => {
      dispatch(createCarReset());
      dispatch(updateCarReset());
    };
  }, [createdCar?.data, updatedCar?.data]);

  useEffect(() => {
    if (createdCar?.error || updatedCar?.error) errorNoty({ msg: 'Something went wrong! Please try again.' });
  }, [createdCar?.error, updatedCar?.error]);

  return (
    <div className='flex justify-center  min-h-[90vh]'>
      <div className='w-full max-w-md space-y-3 bg-white rounded-lg '>
        <h1 className='text-3xl font-bold text-center'>{isEdit ? 'Edit' : 'Add'} New Car</h1>
        <Formik
          initialValues={state?.car ?? initialState}
          validationSchema={validations}
          onSubmit={(values, { setSubmitting }) => {
            const { year, ...rest } = values;

            if (isEdit) {
              dispatch(updateCarStart({ id: state?.car?._id, carData: { ...rest, year: Number(year ?? 0) } }));
            } else dispatch(createCarStart({ ...rest, year: Number(year ?? 0) }));
          }}
        >
          <Form className='space-y-4'>
            <TextFeild label='Make' name='make' type='text' />
            <TextFeild label='Model' name='model' type='text' />
            <TextFeild label='Year' name='year' type='number' />

            <DropDownFeild label='Shipping Status' name='shippingStatus' options={shippingStatusList} />

            <button type='submit' className='w-full px-4 py-2 mt-5 text-white bg-blue-500 rounded-md hover:bg-blue-600'>
              {createdCar?.loading || updatedCar?.loading ? 'Submiting...' : 'Submit'}
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default AddCar;
