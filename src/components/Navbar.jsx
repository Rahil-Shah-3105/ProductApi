import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { HiMenu, HiX } from 'react-icons/hi'; // For the hamburger menu
import logo from '../assets/API Image.webp';

const Navbar = () => {
    const cart = useSelector((state) => state.cart);
    const cartItem = cart.reduce((count, item) => count + 1, 0);

    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className='flex sticky top-0 bg-slate-700 p-3 pe-8 justify-between text-white z-10'>
            <Link to="/" className="flex items-center" aria-label='Redirect to Home Page' onClick={closeMenu}>
                <img
                    src={logo}
                    alt="Product API Logo"
                    className='w-16 h-auto md:w-20'
                    loading="lazy"
                />
                <div className="text-xl md:text-2xl font-bold mx-2">Products API</div>
            </Link>

            <div className="md:hidden flex items-center">
                <button onClick={toggleMenu} aria-label="Toggle Menu">
                    {isOpen ? <HiX size={30} /> : <HiMenu size={30} />}
                </button>
            </div>

            <div
                className={`${isOpen ? 'flex' : 'hidden'
                    } md:flex flex-col md:flex-row gap-5 items-center absolute md:relative bg-slate-700 md:bg-transparent w-full md:w-auto left-0 top-14 md:top-auto p-4 md:p-0`}
            >
                <NavLink to="/" className={(e) => (e.isActive ? 'active' : '')} onClick={closeMenu}>Home</NavLink>
                <NavLink to="/signin" className={(e) => (e.isActive ? 'active' : '')} onClick={closeMenu}>Signin</NavLink>
                <NavLink to="/signup" className={(e) => (e.isActive ? 'active' : '')} onClick={closeMenu}>Signup</NavLink>
                <NavLink to="/cart" className={(e) => (e.isActive ? 'active' : 'relative')} onClick={closeMenu}>
                    Cart
                    {cartItem > 0 && (
                        <span className="bg-blue-500 text-white rounded-full px-1.5 absolute -top-1 -right-4 sm:-top-2 sm:-right-3 md:-top-3 md:-right-3.5 text-xs sm:text-sm md:text-sm lg:text-base">
                            {cartItem}
                        </span>
                    )}
                </NavLink>
            </div>
        </nav>
    );
};

export default Navbar;
