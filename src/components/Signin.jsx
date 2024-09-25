import React, { useState } from 'react'
import { Helmet } from 'react-helmet-async';
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import { toast } from 'react-toastify';

const Signin = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "email") {
      setEmail(value);
    }
    else if (name === "password") {
      setPassword(value);
    }
  };

  const handleSignin = (e) => {
    e.preventDefault();
    const validation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email) {
      toast.error('Enter Email!!!');
    }
    else if (!password) {
      toast.error("Enter Password!!!");
    }
    else if (!validation.test(email)) {
      toast.error("Enter Valid Email");
    }
    else {
      toast.success("Signin Successfully...");
      console.log(`Email is ${email} and Password is: ${password}`);
    }
  };


  return (
    <>
      <Helmet>
        <title>Signin - small example of signin page</title>
        <meta name="description" content="Signin to the small example of signin page" />
      </Helmet>
      <h1 className="text-3xl font-bold text-center underline underline-offset-8 my-10">Signin</h1>
      <form onSubmit={handleSignin}>
        <div className='flex flex-col gap-10'>
          <div className="flex gap-10 justify-center items-center">
            <label htmlFor="email" className='w-20 text-lg text-center'>Email: </label>
            <input
              type="email"
              name='email'
              value={email}
              onChange={handleChange}
              placeholder='Enter Email'
              id='email'
              autoComplete='off'
              className='border border-black rounded-md p-1.5 w-72' />
          </div>
          <div className="flex gap-10 justify-center items-center">
            <label htmlFor="password" className='w-20 text-lg text-center'>Password: </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name='password'
                value={password}
                onChange={handleChange}
                placeholder='Enter Password'
                id='password'
                autoComplete='off'
                className='border border-black rounded-md p-1.5 w-72' />
              <span className='cursor-pointer absolute right-2.5 top-2' onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <IoEye size={20} /> : <IoEyeOff size={20} />}
              </span>
            </div>
          </div>
          <button className='bg-slate-600 text-white border border-black rounded-lg text-center py-1.5 px-4 text-lg flex justify-center items-center mx-auto' aria-label='signIn'>Signin</button>
        </div>
      </form>
    </>
  )
}

export default Signin
