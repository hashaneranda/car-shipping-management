import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export interface ILoginType {
  email: string;
  password: string;
}

export const loginValidations = Yup.object({
  email: Yup.string().email('Invalid email address').required(),
  password: Yup.string().required(),
});

export const loginInitialState: ILoginType = { email: '', password: '' };
