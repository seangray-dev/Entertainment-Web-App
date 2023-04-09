import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/assets/logo.svg';
import { useFormik } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string()
    .min(8, 'Password must be at least 8 characters')
    .required("Can't be empty"),
  repeatPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
    .required("Can't be empty"),
});

const SignUp = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      repeatPassword: '',
    },
    validationSchema,
    onSubmit: (values) => {
      // Handle sign-up logic here
      console.log(values);
    },
  });
  return (
    <main className='mx-auto max-w-[327px] md:max-w-[400px] grid grid-cols-1 items-center justify-center text-white'>
      <Image
        className='mt-12 md:mt-[88px] lg:mt-[78.41px] mb-[60px] md:mb-[72.4px] lg:mb-[83px] mx-auto'
        src={logo}
        alt='My Image'
        width={32}
        height={25}
      />
      <div className='bg-semiDarkBlue font-light px-6 pt-6 pb-8 rounded-[10px] md:rounded-[20px]'>
        <h2 className='mb-10 text-[32px]'>Sign Up</h2>
        <form
          className='flex flex-col justify-center'
          onSubmit={formik.handleSubmit}>
          <div className='mb-6 relative'>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='Email address'
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`bg-transparent outline-none border-grayishBlue border-b pl-4 pb-[18px] w-full text-[15px] placeholder:text-[15px] focus:border-white transition-colors ${
                formik.touched.email && formik.errors.email ? 'border-red' : ''
              }`}
            />
            {formik.touched.email && formik.errors.email && (
              <p className='text-red text-[13px] absolute right-2 top-1'>
                {formik.errors.email}
              </p>
            )}
          </div>
          <div className='mb-6 relative'>
            <input
              type='password'
              id='password'
              name='password'
              placeholder='Password'
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`bg-transparent outline-none border-grayishBlue border-b pl-4 pb-[18px] w-full text-[15px] placeholder:text-[15px] focus:border-white transition-colors ${
                formik.touched.password && formik.errors.password
                  ? 'border-red'
                  : ''
              }`}
            />
            {formik.touched.password && formik.errors.password && (
              <p className='text-red text-[13px] absolute right-2 top-1'>
                {formik.errors.password}
              </p>
            )}
          </div>
          <div className='mb-10 relative'>
            <input
              type='password'
              id='repeatPassword'
              name='repeatPassword'
              placeholder='Repeat Password'
              value={formik.values.repeatPassword}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`bg-transparent outline-none border-grayishBlue border-b pl-4 pb-[18px] w-full text-[15px] placeholder:text-[15px] focus:border-white transition-colors ${
                formik.touched.repeatPassword && formik.errors.repeatPassword
                  ? 'border-red'
                  : ''
              }`}
            />
            {formik.touched.repeatPassword && formik.errors.repeatPassword && (
              <p className='text-red text-[13px] absolute right-2 top-1'>
                {formik.errors.repeatPassword}
              </p>
            )}
          </div>

          <button
            type='submit'
            className='rounded-md bg-red px-4 py-2 mb-6 text-[15px] hover:bg-white hover:text-black transition-colors'>
            Create an account
          </button>
        </form>
        <p className='text-[15px] text-center'>
          Already have an account?{' '}
          <Link
            href='/login'
            className='text-red hover:text-white transition-colors'>
            Login
          </Link>
        </p>
      </div>
    </main>
  );
};

export default SignUp;
