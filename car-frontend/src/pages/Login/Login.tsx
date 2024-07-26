import React, { useContext, useEffect } from 'react';
import { Formik, Field, Form } from 'formik';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'app/rootReducer';

// context
import { Context as UserContext } from 'common/context/UserContext';

// redux
import { loginUser, loginUserReset } from 'features/user/userSlice';
import { errorNoty } from 'common/components/Notification/Notification';

import TextFeild from 'common/components/FormHelper/TextFeild';

import { loginInitialState, loginValidations } from './utils/formHelper';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userData = useContext(UserContext);

  const { loading, error, data } = useSelector((state: RootState) => state.user?.loginUserPayload);

  useEffect(() => {
    if (data) {
      userData.login(data, data?.access_token);
      navigate('/');
    }

    return () => {
      dispatch(loginUserReset());
    };
  }, [data]);

  useEffect(() => {
    if (error) errorNoty({ msg: 'Something went wrong! Please try again.' });
  }, [error]);

  return (
    <div className='flex items-center justify-center '>
      <div className='w-full max-w-md p-8 space-y-3 bg-white rounded-lg '>
        <h1 className='text-3xl font-bold text-center'>Sign In</h1>
        <Formik
          initialValues={loginInitialState}
          validationSchema={loginValidations}
          onSubmit={(values, { setSubmitting }) => {
            dispatch(loginUser(values));
          }}
        >
          <Form className='space-y-4'>
            <TextFeild label='Email' name='email' type='email' />
            <TextFeild label='Password' name='password' type='password' />

            <button type='submit' className='w-full px-4 py-2 text-white bg-blue-500 rounded-md hover:bg-blue-600'>
              Login
            </button>
          </Form>
        </Formik>

        <p className='pt-5 text-center'>
          Not a member?{' '}
          <Link className='font-semibold underline hover:text-reddish text-primary ' to={'/register'}>
            {loading ? 'Signing in...' : 'Sign In'}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
