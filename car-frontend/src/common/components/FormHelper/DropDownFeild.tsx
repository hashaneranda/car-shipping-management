import { ErrorMessage, Field } from 'formik';
import React from 'react';

interface ItemProps {
  label: string;
  value: string;
}

type Props = { label: string; name: string; options: Array<ItemProps> };

export default function DropDownFeild({ label, name, options }: Props) {
  return (
    <div>
      <label htmlFor={name} className='block text-sm font-medium text-gray-700'>
        {label}
      </label>
      <Field as='select' name={name} className='w-full px-3 py-2 mt-1 border rounded-md'>
        {options.map((option: ItemProps) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Field>

      <ErrorMessage name={name} component='div' className='text-red-500' />
    </div>
  );
}
