import React, { useState } from 'react';
import { useLoaderData, useNavigation } from 'react-router-dom';
import LoadingSpinner from './LoadingSpinner';

const BooksDetails = () => {
    const navigation = useNavigation()
    if (navigation.state === "loading") {
        return <LoadingSpinner></LoadingSpinner>
    }
    const bookData = useLoaderData()
    const [fold, setFold] = useState(true)
    console.log(bookData);
    const { authors, publisher, year, rating, desc, image, title, price, url } = bookData
    return (

        <div className='border max-w-screen-lg mx-auto flex flex-col md:flex md:flex-row md:items-center lg:items-start mt-20'>
            <img className='md:w-1/2 ' src={image} alt="book cover" />
            <div className=' px-6 md:py-16 md:pr-11 md:w-1/2'>
                <p className='badge'>Brand new</p>
                <h1 className='mb-3 text-3xl font-extrabold'>{title}</h1>
                <p>Author: {authors}</p>
                <p>Publisher: {publisher}</p>
                <p>Year: {year}</p>
                <p>Ratings: {rating}</p>
                {fold ? (
                    <p className='my-5 text-gray-500'>{desc.substring(0, 100)}..... <span className='cursor-pointer text-blue-600 hover:underline' onClick={() => setFold(!fold)}>See More</span></p>
                    
                ) : (
                    <p className='my-5 text-gray-800'>{desc}<span className='cursor-pointer text-blue-600 hover:underline' onClick={() => setFold(!fold)}> See Less</span></p>
                )}
                <div className='flex gap-3 items-center'>
                    <a href={url} target='_blank' className='btn'>Buy Now</a>
                    <p className='font-extrabold text-gray-600'>Price: {price}</p>
                </div>
            </div>
        </div>
    );
};

export default BooksDetails;