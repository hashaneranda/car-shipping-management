import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export interface IRegisterType {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export const registerValidations = Yup.object({
  name: Yup.string().required(),
  email: Yup.string().email('Invalid email address').required(),
  password: Yup.string().required(),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password'), ''], 'Passwords must match')
    .required(),
});

export const registerInitialState: IRegisterType = { name: '', email: '', password: '', confirmPassword: '' };
