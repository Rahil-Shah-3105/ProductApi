import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    return (
        <>
            <nav className='flex sticky top-0 gap-10 bg-slate-600 p-3 justify-end pe-10 text-lg text-white'>
                <NavLink to={"/"} className={(e) => (e.isActive ? 'active' : '')}>Home</NavLink>
                <NavLink to={"/signin"} className={(e) => (e.isActive ? 'active' : '')}>Signin</NavLink>
                <NavLink to={"/signup"} className={(e) => (e.isActive ? 'active' : '')}>Signup</NavLink>
                <NavLink to={"/cart"} className={(e) => (e.isActive ? 'active' : '')}>Cart</NavLink>
            </nav>
        </>
    )
}

export default Navbar
