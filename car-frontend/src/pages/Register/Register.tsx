import React, { useContext, useEffect } from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import { useDispatch, useSelector } from 'react-redux';

// context
import { Context as UserContext } from 'common/context/UserContext';

import TextFeild from 'common/components/FormHelper/TextFeild';
import { registerInitialState, registerValidations } from './utils/formHelper';
import { Link, useNavigate } from 'react-router-dom';
import { RootState } from 'app/rootReducer';
import { registerUser } from 'features/user/userSlice';
import { errorNoty } from 'common/components/Notification/Notification';

const Register: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useContext(UserContext);

  const { loading, error, data } = useSelector((state: RootState) => state.user?.registerUserPayload);

  useEffect(() => {
    userData.login(data, data?.access_token);
    navigate('/');
  }, [data]);

  useEffect(() => {
    if (error) errorNoty({ msg: 'Something went wrong! Please try again.' });
  }, [error]);

  return (
    <div className='flex items-center justify-center pb-5'>
      <div className='w-full max-w-md p-8 space-y-3 bg-white rounded-lg '>
        <h1 className='text-3xl font-bold text-center'>Sign Up</h1>
        <Formik
          initialValues={registerInitialState}
          validationSchema={registerValidations}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            // setSubmitting(false);

            dispatch(registerUser(values));
          }}
        >
          <Form className='space-y-4'>
            <TextFeild label='Name' name='name' type='text' />
            <TextFeild label='Email' name='email' type='email' />
            <TextFeild label='Password' name='password' type='password' />

            <TextFeild label='Confirm Password' name='confirmPassword' type='password' />

            <button type='submit' className='w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600'>
              {loading ? 'Signing up...' : 'Sign Up'}
            </button>
          </Form>
        </Formik>

        <p className='pt-5 text-center'>
          Already have a account?{' '}
          <Link className='font-semibold underline hover:text-reddish text-primary ' to={'/login'}>
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
