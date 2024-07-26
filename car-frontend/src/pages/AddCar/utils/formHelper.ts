import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export interface ICarAddType {
  make: string;
  model: string;
  year?: number;
  shippingStatus: string;
}

export const validations = Yup.object({
  make: Yup.string().required('Make is required').min(2, 'Make must be at least 2 characters long'),
  model: Yup.string().required('Model is required').min(1, 'Model must be at least 1 character long'),
  year: Yup.number()
    .required('Year is required')
    .min(1886, 'Year must be at least 1886')
    .max(new Date().getFullYear(), `Year can't be in the future`),
  shippingStatus: Yup.string()
    .required('Shipping status is required')
    .oneOf(['pending', 'shipped', 'delivered', 'canceled'], 'Invalid shipping status'),
});

export const initialState: ICarAddType = { make: '', model: '', year: undefined, shippingStatus: '' };

export const shippingStatusList = [
  {
    label: 'Pending',
    value: 'pending',
  },
  {
    label: 'Shipped',
    value: 'shipped',
  },
  {
    label: 'Delivered',
    value: 'delivered',
  },
];
