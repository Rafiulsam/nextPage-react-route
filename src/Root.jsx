import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './components/Header';
import LoadingSpinner from './components/LoadingSpinner';
import Footer from './components/Footer';

const Root = () => {
    return (
        <div>
            <Header></Header>
            <div className='min-h-[calc(100vh-132px)]'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;