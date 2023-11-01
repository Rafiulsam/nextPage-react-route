import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const BooksDetails = () => {
    const bookData = useLoaderData()
    const [fold, setFold] = useState(true)
    console.log(bookData);
    const { authors, publisher, year, rating, desc, image, title, price, url } = bookData
    return (
        <div className='my-container'>
            <div className='border max-w-4xl mx-auto flex flex-col lg:flex lg:flex-row'>
                <img src={image} alt="book cover" />
                <div className='p-5'>
                    <p className='badge'>Brand new</p>
                    <h1 className='mb-3 text-3xl font-extrabold'>{title}</h1>
                    <p>Author: {authors}</p>
                    <p>Publisher: {publisher}</p>
                    <p>Year: {year}</p>
                    <p>Ratings: {rating}</p>
                    {fold ? (
                        <>
                            <p className='my-3 text-gray-500'>{desc.substring(0, 100)}..... <span className='cursor-pointer text-blue-600 hover:underline' onClick={() => setFold(!fold)}>More</span></p>
                        </>
                    ) : (<>
                        <p className='my-3 text-gray-800'>{desc}<span className='cursor-pointer text-blue-600 hover:underline' onClick={() => setFold(!fold)}> Less</span></p>
                    </>)}
                    <div className='flex gap-3 items-center'>
                        <a href={url} target='_blank' className='btn'>Buy Now</a>
                        <p className='font-extrabold text-gray-600'>Price: {price}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BooksDetails;