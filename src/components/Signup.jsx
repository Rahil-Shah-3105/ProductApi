import React, { useState } from 'react'
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";

const Signup = () => {
  document.title = "Signup";

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPasshowPassword] = useState(false);

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    if (name === 'username') {
      setUsername(value);
    } else if (name === 'email') {
      setEmail(value);
    } else if (name === 'phone') {
      setPhone(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const emailValidation = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneValidation = /^\d{10}$/;

    if (!username) {
      alert("Enter User Name!!!");
    } else if (!email) {
      alert("Enter Email!!!");
    } else if (!phone) {
      alert("Enter Phone Numebr!!!");
    } else if (!password) {
      alert("Enter Password!!!");
    } else if (!emailValidation) {
      alert("Enter Proper Email!!!");
    } else if (!phoneValidation.test(phone)) {
      alert("Enter Proper Phone Number!!!");
    } else {
      alert("Signup");
      console.log(`Username: ${username}\n Email: ${email}\n Phone: ${phone}\n Password: ${password}`);
    }
  };

  return (
    <>
      <h1 className="text-3xl font-bold text-center underline underline-offset-8 my-10">Signup</h1>
      <form onSubmit={handleSignup}>
        <div className='flex flex-col gap-10'>
          <div className="flex gap-10 justify-center items-center">
            <label htmlFor="username" className='w-20 text-lg text-center'>Name: </label>
            <input
              type="text"
              name='username'
              value={username}
              placeholder='Enter Name'
              id='username'
              autoComplete='off'
              onChange={handleChange}
              className='border border-black rounded-md p-1.5 w-72' />
          </div>
          <div className="flex gap-10 justify-center items-center">
            <label htmlFor="email" className='w-20 text-lg text-center'>Email: </label>
            <input
              type="email"
              name='email'
              value={email}
              placeholder='Enter Email'
              id='email'
              autoComplete='off'
              onChange={handleChange}
              className='border border-black rounded-md p-1.5 w-72' />
          </div>
          <div className="flex gap-10 justify-center items-center">
            <label htmlFor="phone" className='w-20 text-lg text-center'>Phone: </label>
            <input
              type="phone"
              name='phone'
              value={phone}
              placeholder='Enter Phone Number'
              id='phone'
              autoComplete='off'
              onChange={handleChange}
              className='border border-black rounded-md p-1.5 w-72' />
          </div>
          <div className="flex gap-10 justify-center items-center">
            <label htmlFor="password" className='w-20 text-lg text-center'>Password: </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                name='password'
                value={password}
                placeholder='Enter Password'
                id='password'
                autoComplete='off'
                onChange={handleChange}
                className='border border-black rounded-md p-1.5 w-72' />
              <span className='cursor-pointer absolute right-2.5 top-2' onClick={() => setShowPasshowPassword(!showPassword)}>
                {showPassword ? <IoEyeOff size={20} /> : <IoEye size={20} />}
              </span>
            </div>
          </div>
          <button className='bg-slate-600 text-white border border-black rounded-lg text-center py-1.5 px-4 text-lg flex justify-center items-center mx-auto' aria-label='signUp'>Signup</button>
        </div>
      </form>
    </>
  )
}

export default Signup
