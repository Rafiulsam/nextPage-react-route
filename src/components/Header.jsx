import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BoltIcon, Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    return (
        <>
            <div className='hidden lg:flex justify-between items-center max-w-screen-xl mx-auto bg-gray-100 px-10 py-5'>
                {/* Logo section*/}
                <Link to='/' className='inline-flex items-center gap-2'><BoltIcon className='h-6 w-6 text-blue-500' /> <span className='text-xl font-bold'>nextPage</span></Link>
                {/* nav items section*/}
                <div className='space-x-8 font-semibold'>
                    <NavLink to='/' className={({ isActive }) => isActive ? "text-blue-600 ": "hover:text-blue-400 transition-colors duration-200"}>Home</NavLink>
                    <NavLink to='books' className={({ isActive }) => isActive ? "text-blue-600 ": "hover:text-blue-400 transition-colors duration-200"}>Books</NavLink>
                    <NavLink to='about' className={({ isActive }) => isActive ? "text-blue-600 ": "hover:text-blue-400 transition-colors duration-200"}>About us</NavLink>
                </div>
            </div>
            {/* mobile nav section */}
            <div className='lg:hidden'>
                <div className='flex justify-between max-w-screen-xl mx-auto font-semibold bg-gray-100 px-10 py-5'>
                    <Link to='/' className='inline-flex items-center gap-2'><BoltIcon className='h-6 w-6 text-blue-500' /> <span className='text-xl font-bold'>nextPage</span></Link>
                    <button title={isMenuOpen ? "Close Menu " : "Open Menu"} onClick={() => setIsMenuOpen(!isMenuOpen)}>
                        {!isMenuOpen ? <Bars3BottomRightIcon className='w-5 '></Bars3BottomRightIcon> : <XMarkIcon className='w-5'></XMarkIcon>}
                    </button>
                </div>
                {/* Dropdown menu */}
                {isMenuOpen && (<div className='absolute top-14 w-full bg-gray-100 flex flex-col px-20 pb-4 font-bold'>
                    <ul>
                        <li>
                            <NavLink to='/' className={({ isActive }) => isActive ? "text-blue-600 " : ""}>Home</NavLink>
                        </li>
                        <li>
                            <NavLink to='books' className={({ isActive }) => isActive ? "text-blue-600" : ""}>Books</NavLink>
                        </li>
                        <li>
                            <NavLink to='about' className={({ isActive }) => isActive ? "text-blue-600" : ""}>About us</NavLink>
                        </li>
                    </ul>
                </div>)}
            </div>
        </>
    );
};

export default Header;