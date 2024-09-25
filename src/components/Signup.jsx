import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { IoEye, IoEyeOff } from "react-icons/io5";
import { Navigate, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Signup = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    phone: "",
    gender: "",
    password: "",
    confirmPassword: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser(prevUser => ({
      ...prevUser,
      [e.target.name]: e.target.value
    }));
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneValidation = /^\d{10}$/;

    const { username, email, phone, gender, password, confirmPassword } = user;

    if (!username) {
      toast.error("Enter User Name!!!");
    } else if (!email) {
      toast.error("Enter Email!!!");
    } else if (!phone) {
      toast.error("Enter Phone Number!!!");
    } else if (!password) {
      toast.error("Enter Password!!!");
    } else if (!emailValidation.test(email)) {
      toast.error("Enter Proper Email!!!");
    } else if (!phoneValidation.test(phone)) {
      toast.error("Enter Proper Phone Number!!!");
    } else if (!gender) {
      toast.error("Select your Gender!!!");
    } else if (password !== confirmPassword) {
      toast.error("Both Passwords do Not Match!!");
    } else {
      toast.success("Signup Successfully...");
      navigate("/");
      console.log(`Username: ${username}\nEmail: ${email}\nPhone: ${phone}\nGender: ${gender}\nPassword: ${password}\nConfirm Password: ${confirmPassword}`);
    }
  };

  return (
    <>
      <Helmet>
        <title>Signup - small example of Signup page</title>
        <meta name="description" content="Signup to the small example of Signup page" />
      </Helmet>
      <h1 className="text-3xl font-bold text-center underline underline-offset-8 my-10">Signup</h1>
      <form onSubmit={handleSignup}>
        <div className='flex flex-col gap-10'>
          <div className="flex gap-10 justify-center items-center">
            <label htmlFor="username" className='w-20 text-lg text-center'>Name:</label>
            <input
              type="text"
              name='username'
              value={user.username}
              placeholder='Enter Name'
              id='username'
              autoComplete='off'
              onChange={handleChange}
              className='border border-black rounded-md p-1.5 w-72'
            />
          </div>
          <div className="flex gap-10 justify-center items-center">
            <label htmlFor="email" className='w-20 text-lg text-center'>Email:</label>
            <input
              type="email"
              name='email'
              value={user.email}
              placeholder='Enter Email'
              id='email'
              autoComplete='off'
              onChange={handleChange}
              className='border border-black rounded-md p-1.5 w-72'
            />
          </div>
          <div className="flex gap-10 justify-center items-center">
            <label htmlFor="phone" className='w-20 text-lg text-center'>Phone:</label>
            <input
              type="phone"
              name='phone'
              value={user.phone}
              placeholder='Enter Phone Number'
              id='phone'
              autoComplete='off'
              onChange={handleChange}
              className='border border-black rounded-md p-1.5 w-72'
            />
          </div>
          <div className="flex gap-10 justify-center items-center">
            <label className='w-20 text-lg text-center'>Gender:</label>
            <div className="flex gap-6 w-72">
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  name='gender'
                  value="Male"
                  id='gender-male'
                  onChange={handleChange}
                  className="form-radio"
                />
                <label htmlFor="gender-male" className="cursor-pointer">Male</label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  name='gender'
                  value="Female"
                  id='gender-female'
                  onChange={handleChange}
                  className="form-radio"
                />
                <label htmlFor="gender-female" className="cursor-pointer">Female</label>
              </div>
            </div>
          </div>
          <div className="flex gap-10 justify-center items-center">
            <label htmlFor="password" className='w-20 text-lg text-center'>Password:</label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name='password'
                value={user.password}
                placeholder='Enter Password'
                id='password'
                autoComplete='off'
                onChange={handleChange}
                className='border border-black rounded-md p-1.5 w-72'
              />
              <span className='cursor-pointer absolute right-2.5 top-2' onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <IoEyeOff size={20} /> : <IoEye size={20} />}
              </span>
            </div>
          </div>
          <div className="flex gap-10 justify-center items-center">
            <label htmlFor="confirmPassword" className='w-20 text-lg text-center'>Confirm Password:</label>
            <div className="relative">
              <input
                type={showConfirmPassword ? "text" : "password"}
                name='confirmPassword'
                value={user.confirmPassword}
                placeholder='Enter Confirm Password'
                id='confirmPassword'
                autoComplete='off'
                onChange={handleChange}
                className='border border-black rounded-md p-1.5 w-72'
              />
              <span className='cursor-pointer absolute right-2.5 top-2' onClick={() => setShowConfirmPassword(!showConfirmPassword)}>
                {showConfirmPassword ? <IoEyeOff size={20} /> : <IoEye size={20} />}
              </span>
            </div>
          </div>
          <button className='bg-slate-600 text-white border border-black rounded-lg text-center py-1.5 px-4 text-lg flex justify-center items-center mx-auto' aria-label='signUp'>Signup</button>
        </div>
      </form>
    </>
  );
}

export default Signup;
