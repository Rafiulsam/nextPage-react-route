import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BoltIcon } from '@heroicons/react/24/solid'


const Header = () => {
    return (
        <div className='flex justify-between items-center max-w-screen-xl mx-auto bg-gray-100 px-10 py-5'>
            {/* Logo section*/}
            <Link to='/' className='inline-flex items-center gap-2'><BoltIcon className='h-6 w-6 text-blue-500'/> <span className='text-xl font-bold'>nextPage</span></Link>
            {/* nav items section*/}
            <div className='space-x-8 font-semibold'>
                <NavLink to='/' className={({ isActive }) => isActive ? "text-blue-600" : ""}>Home</NavLink>
                <NavLink to='books' className={({ isActive }) => isActive ? "text-blue-600" : ""}>Books</NavLink>
                <NavLink to='About' className={({ isActive }) => isActive ? "text-blue-600" : ""}>About us</NavLink>
            </div>
        </div>
    );
};

export default Header;