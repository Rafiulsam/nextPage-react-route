import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import Lottie from 'lottie-react';
import animation from "../assets/animation.json"

const Home = () => {
    return (
        <div className='my-container flex flex-col items-center justify-between lg:flex-row md:flex-row gap-5 '>
            {/* Text Content */}
            <div className='lg:max-w-lg  lg:pr-5'>
                <div className='max-w-xl mb-6 lg:mt-8'>
                    <div>
                        <p className='badge'>On Sale!</p>
                    </div>
                    <h2 className='max-w-lg font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none'>
                        A reader lives a thousand <span className='inline-block text-blue-400'>before he dies.</span> The man who never reads <span className='inline-block text-blue-400'>lives only one.</span>
                    </h2>
                    <p className="text-xs mt-2 mb-6 text-gray-700"> <i>~George R.R. Martin</i></p>
                    <p className='text-base text-gray-700 md:text-lg'>
                        Books are a uniquely portable magic. Books serve to show a man that
                        those original thoughts of his aren’t very new after all. The man
                        who does not read good books is no better than the man who can’t.
                    </p>
                </div>
                <div className='flex flex-col items-center md:flex-row'>
                    <Link to='/books' className='btn md:w-auto md:mr-4'>
                        <div className='inline-flex items-center justify-center w-full h-full'>
                            <p className='mr-3'>Visit Store</p>
                            <ShoppingCartIcon className='w-5 text-gray-100' />
                        </div>
                    </Link>
                    <Link
                        to='/about'
                        className='inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-blue-700'
                    >
                        Learn More
                    </Link>
                </div>
            </div>
            {/* Lottie Animation */}
            <div className='lg:w-1/2'>
                
                <Lottie animationData={animation}/>
                
            </div>
        </div>
    );
};

export default Home;