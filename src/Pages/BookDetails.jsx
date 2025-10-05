import React from 'react';
import { useLoaderData, useParams } from 'react-router';
import Container from '../Components/Container';

const BookDetails = () => {
    const { id } = useParams()
    const bookId = Number(id)
    const data = useLoaderData()
    const singleBookData = data.find(book => book.bookId === bookId)
    const { bookName, image, author, category, review, tags, totalPages, yearOfPublishing, publisher, rating } = singleBookData
    console.log(singleBookData);
    return (
        <Container>
            <div className='flex gap-12 justify-between my-16 '>
                <div className='bg-gray-50 p-12 w-96 flex justify-center items-center rounded-2xl'>
                    <img className='rounded-2xl w-full' src={image} alt="" />
                </div>
                <div className='flex-1 space-y-8'>
                    <h1 className='text-5xl font-bold'>{bookName}</h1>
                    <p className='font-semibold text-gray-600 text-lg'>By : {author}</p>
                    <p className='font-semibold text-lg border-b-2 border-t-2 border-gray-200 py-3'>{category}</p>
                    <p className='font-semibold text-gray-600'><span className='font-bold text-black text-lg'>Review : </span> {review}</p>

                    <div className='flex gap-5 items-center border-b-2 border-gray-200 pb-5'>
                        <p className='font-bold text-lg'>Tag </p>
                        <p className='text-green-500 bg-green-50 font-semibold py-2 px-4 rounded-full'>{tags[0]}</p>
                        <p className='text-green-500 bg-green-50 font-semibold py-2 px-4 rounded-full'>{tags[1]}</p>
                    </div>

                    <div className='grid grid-cols-2'>
                        <h3 className='font-bold'>Number of Pages : </h3>
                        <p className='font-semibold text-gray-700'>{totalPages}</p>
                    </div>
                    <div className='grid grid-cols-2'>
                        <h3 className='font-bold'>Publisher : </h3>
                        <p className='font-semibold text-gray-700'>{publisher}</p>
                    </div>
                    <div className='grid grid-cols-2'>
                        <h3 className='font-bold'>Year Of Publishing : </h3>
                        <p className='font-semibold text-gray-700'>{yearOfPublishing}</p>
                    </div>
                    <div className='grid grid-cols-2'>
                        <h3 className='font-bold'>Ratings : </h3>
                        <p className='font-semibold text-gray-700'>{rating}</p>
                    </div>


                    <div className='flex gap-3'>

                        <button className=" px-6 py-3 font-semibold rounded-lg hover:cursor-pointer border-2 border-gray-200 text-black">
                           Mark as Read
                        </button>
                        <button className="bg-[#59C6D2] text-white px-6 py-3 font-semibold rounded-lg hover:cursor-pointer">
                           Add to Wishlist
                        </button>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default BookDetails;