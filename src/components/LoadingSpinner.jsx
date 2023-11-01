import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className='flex justify-center items-center h-[calc(100vh-68px)] text-gray-600'>
            <p className='text-7xl font-semibold'>L</p>
                <div className='mt-5 border-8 border-dashed rounded-full border-blue-600 w-10 h-10 animate-spin'></div>
                <p className='text-7xl font-semibold'>ading...</p>
        </div>
    );
};

export default LoadingSpinner;