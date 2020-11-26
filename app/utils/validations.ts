/* eslint-disable import/prefer-default-export */
import * as yup from 'yup';

export const LoginSchema = yup.object().shape({
  email: yup
    .string()
    .email('Must be a valid email')
    .required('Email is Required'),
  password: yup
    .string()
    .matches(/(?=.*[a-z])/, 'Minimum one lowercase character Required')
    .matches(/(?=.*[A-Z])/, 'Minimum one uppercase character Required')
    .matches(/(?=.*[0-9])/, 'Minimum one number Required')
    .min(8, 'Minimum 8 characters required')
    .required('Password is Required')
});

export const SignUpSchema = yup.object().shape({
  email: yup
    .string()
    .email('Must be a valid email')
    .required('Email is Required'),
  password: yup
    .string()
    .matches(/(?=.*[a-z])/, 'Minimum one lowercase character Required')
    .matches(/(?=.*[A-Z])/, 'Minimum one uppercase character Required')
    .matches(/(?=.*[0-9])/, 'Minimum one number Required')
    .min(8, 'Minimum 8 characters required')
    .required('Password is Required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password')], 'Password must be the same')
    .required('Please confirm password')
});
