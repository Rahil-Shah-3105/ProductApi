import React from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const cart = useSelector((state) => state.cart);
    const cartItem = cart.reduce((count, item) => count + 1, 0)
    return (
        <>
            <nav className='flex sticky top-0 gap-10 bg-slate-600 p-3 justify-end pe-10 text-lg text-white'>
                <NavLink to={"/"} className={(e) => (e.isActive ? 'active' : '')}>Home</NavLink>
                <NavLink to={"/signin"} className={(e) => (e.isActive ? 'active' : '')}>Signin</NavLink>
                <NavLink to={"/signup"} className={(e) => (e.isActive ? 'active' : '')}>Signup</NavLink>
                <NavLink to={"/cart"} className={(e) => (e.isActive ? 'active' : '')}>
                    Cart
                    {cartItem > 0 && <span className="bg-blue-500 text-white rounded-full px-2 absolute top-1.5 right-5 text-sm">{cartItem}</span>}
                </NavLink>
            </nav>
        </>
    )
}

export default Navbar
