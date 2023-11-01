import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {
    return (
        <Link to= {`/book/${book.isbn13}`}>
            <div className='overflow-hidden relative transition duration-200 transform hover:-translate-y-5 rounded shadow-lg hover:shadow-2xl'>
                <img className='w-full h-full lg:h-80 object-cover' src={book.image} alt="book cover" />
                <div className='bg-black bg-opacity-75 text-gray-300 p-6 absolute inset-0 transition duration-200 opacity-0 hover:opacity-100 flex flex-col tracking-wide'>
                    <h1 className='font-bold text-lg text-white'>{book.title}</h1>
                    <br />
                    <p className='text-sm'>{book.subtitle.substring(0, 45)}...</p>
                    <br />
                    <p className='mt-auto text-sm'>Price: {book.price}</p>
                </div>
            </div>
        </Link>
    );
};

export default Book;