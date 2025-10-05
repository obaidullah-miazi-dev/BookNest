import React, { Suspense } from 'react';
import Book from './Book';

const Books = ({data}) => {
    // console.log(data);
    return (
       <>
       <h1 className='text-center text-4xl font-bold mb-8 mt-16'>All Books</h1>
       <Suspense fallback={<p>loading.....</p>}>
        <div className='grid grid-cols-3 gap-8'>
            {
            data.map((book,index) => <Book key={index} book={book}></Book>)
        }
        </div>
       </Suspense>
       </>
    );
};

export default Books;