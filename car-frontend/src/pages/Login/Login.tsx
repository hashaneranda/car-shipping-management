import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';

import { loginInitialState, loginValidations } from './utils/formHelper';
import TextFeild from 'common/components/FormHelper/TextFeild';
import { Link } from 'react-router-dom';

const Login: React.FC = () => {
  return (
    <div className='flex items-center justify-center '>
      <div className='w-full max-w-md p-8 space-y-3 bg-white rounded-lg '>
        <h1 className='text-3xl font-bold text-center'>Sign In</h1>
        <Formik
          initialValues={loginInitialState}
          validationSchema={loginValidations}
          onSubmit={(values, { setSubmitting }) => {
            console.log(values);
            // setSubmitting(false);
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
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
