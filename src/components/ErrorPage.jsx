import React from 'react';
import { Link, useRouteError } from 'react-router-dom';
import Lottie from 'lottie-react';
import errorAnimation from "../assets/errorAnimation.json"

const ErrorPage = () => {
    const { error, status } = useRouteError()
    return (
        <div className='flex flex-col justify-center items-center h-screen'>
            <div className='flex flex-col items-center justify-center'>
                <div className='w-40 h-40'>
                    <Lottie animationData={errorAnimation}></Lottie>
                </div>
                <p className='text-9xl font-extrabold text-yellow-400'>
                {status}</p>
                <p className='text-5xl text-red-600 my-5'>
                   <i> {error.message}</i>
                </p>
                <Link to='/' className='btn'> Back to Homepage</Link>
            </div>
        </div>
    );
};

export default ErrorPage;