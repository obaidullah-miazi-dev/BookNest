import { Star } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router';

const Book = ({ book }) => {
    console.log(book);
    return (
        <>
            <Link to={`bookDetails/${book.bookId}`}>

                <div className='border-1 border-gray-100 rounded-2xl p-5 space-y-5'>
                    <div className='bg-gray-100 rounded-2xl py-8 px-16'>
                        <img className='w-60 h-90 rounded-2xl mx-auto' src={book.image} alt="" />
                    </div>

                    <div className='flex gap-5'>
                        <p className='text-green-500 bg-green-50 font-semibold py-2 px-4 rounded-full'>{book.tags[0]}</p>
                        <p className='text-green-500 bg-green-50 font-semibold py-2 px-4 rounded-full'>{book.tags[1]}</p>
                    </div>

                    <h2 className='font-bold text-2xl'>{book.bookName}</h2>

                    <p className='font-semibold text-gray-600 border-b-2 border-gray-300 pb-5 border-dashed'>By : {book.author}</p>

                    <div className='flex justify-between font-semibold text-lg'>
                        <p>{book.category}</p>
                        <p className='flex gap-2 items-center '>{book.rating} <Star className='w-5' /></p>
                    </div>

                </div>
            </Link>


        </>
    );
};

export default Book;