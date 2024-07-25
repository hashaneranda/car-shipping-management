import { ErrorMessage, Field } from 'formik';
import React from 'react';

type Props = { label: string; name: string; type: string };

export default function TextFeild({ label, name, type }: Props) {
  return (
    <div>
      <label htmlFor={name} className='block text-sm font-medium text-gray-700'>
        {label}
      </label>
      <Field name={name} type={type} className='w-full px-3 py-2 mt-1 border rounded-md' />
      <ErrorMessage name={name} component='div' className='text-red-500' />
    </div>
  );
}
