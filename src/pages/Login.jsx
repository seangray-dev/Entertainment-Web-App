import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../public/assets/logo.svg';

const Login = () => {
  return (
    <main className='mx-auto max-w-[327px] grid grid-cols-1 items-center justify-center text-white'>
      <Image
        className='mt-12 mb-[60px] mx-auto'
        src={logo}
        alt='My Image'
        width={32}
        height={25}
      />
      <div className='bg-semiDarkBlue font-light px-6 pt-6 pb-8 rounded-[10px]'>
        <h2 className='mb-10 text-[32px]'>Login</h2>
        <form className='flex flex-col justify-center'>
          <div className='mb-6'>
            <input
              type='email'
              id='email'
              name='email'
              placeholder='Email address'
              required
              className='bg-transparent outline-none border-grayishBlue border-b pl-4 pb-[18px] w-full text-[15px] placeholder:text-[15px]'
            />
            <label className='sr-only' htmlFor='email'>
              Email address
            </label>
          </div>
          <div className='mb-10'>
            <input
              type='password'
              id='password'
              name='password'
              placeholder='Password'
              required
              className='bg-transparent outline-none border-grayishBlue border-b pl-4 pb-[18px] w-full text-[15px] placeholder:text-[15px]'
            />
            <label className='sr-only' htmlFor='password'>
              Password
            </label>
          </div>

          <button
            type='submit'
            className='rounded-md bg-red px-4 py-2 mb-6 text-[15px] hover:bg-white hover:text-black transition-colors'>
            Login or Sign Up
          </button>
        </form>
        <p className='text-[15px] text-center'>
          Don't have an account?{' '}
          <Link
            href='/'
            className='text-red hover:text-white transition-colors'>
            Sign Up
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Login;
