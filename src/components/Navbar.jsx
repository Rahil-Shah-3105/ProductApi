import React from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/API Image.webp';

const Navbar = () => {
    const cart = useSelector((state) => state.cart);
    const cartItem = cart.reduce((count, item) => count + 1, 0);

    return (
        <nav className='flex sticky top-0 gap-10 bg-slate-700 p-2 pt-1 justify-between pe-10 text-lg text-white z-10'>
            <Link to="/" className="flex items-center" aria-label='Redirect to Home Page'>
                <img
                    src={logo}
                    alt="Product API Logo"
                    className='w-20 h-auto'
                    loading="lazy"
                />
                <div className="flex mx-2">Products API</div>
            </Link>
            <div className="flex gap-7 items-center">
                <NavLink to="/" className={(e) => (e.isActive ? 'active' : '')}>Home</NavLink>
                <NavLink to="/signin" className={(e) => (e.isActive ? 'active' : '')}>Signin</NavLink>
                <NavLink to="/signup" className={(e) => (e.isActive ? 'active' : '')}>Signup</NavLink>
                <NavLink to="/cart" className={(e) => (e.isActive ? 'active' : '')}>
                    Cart
                    {cartItem > 0 && (
                        <span className="bg-blue-500 text-white rounded-full px-2 absolute top-2 md:top-0 lg:top-1 right-6 text-sm">
                            {cartItem}
                        </span>
                    )}
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
