import React from "react";
import { Star, Calendar, BookOpen, Building2 } from "lucide-react";
import { Link } from "react-router";

const ReadBookList = ({ book }) => {
  return (
    <>
      
      <div className="flex flex-col sm:flex-row bg-white rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden p-4 gap-4 border border-gray-100">

        <div className="flex justify-center sm:justify-start">
          <img
            src={book.image}
            alt={book.bookName}
            className="w-32 h-44 object-cover rounded-xl"
          />
        </div>


        <div className="flex flex-col justify-between w-full">
          <div>
            <h2 className="text-lg font-semibold text-gray-800">
              {book.bookName}
            </h2>
            <p className="text-sm text-gray-500 mb-2">
              By : <span className="text-gray-700 font-medium">{book.author}</span>
            </p>


            <div className="flex flex-wrap gap-2 mb-3">
              {book.tags.map((tag, index) => (
                <span
                  key={index}
                  className="text-xs font-medium bg-green-100 text-green-700 px-2 py-1 rounded-full"
                >
                  {tag}
                </span>
              ))}
            </div>


            <div className="flex flex-wrap items-center gap-3 text-sm text-gray-600 mb-3">
              <span className="flex items-center gap-1">
                <Calendar className="w-4 h-4 text-gray-500" />
                Year of Publishing: {book.yearOfPublishing}
              </span>
              <span className="flex items-center gap-1">
                <Building2 className="w-4 h-4 text-gray-500" />
                Publisher: {book.publisher}
              </span>
              <span className="flex items-center gap-1">
                <BookOpen className="w-4 h-4 text-gray-500" />
                Page: {book.totalPages}
              </span>
            </div>
          </div>


          <div className="flex flex-wrap items-center justify-between border-t-2 border-gray-200 pt-3">
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                Category: {book.category}
              </span>
              <span className="text-sm font-medium text-yellow-600 bg-yellow-50 px-3 py-1 rounded-full flex items-center gap-1">
                <Star className="w-4 h-4" />
                Rating: {book.rating}
              </span>
              <Link to={`/bookDetails/${book.bookId}`} className="bg-green-500 hover:bg-green-600 text-white text-sm px-4 py-2 rounded-full mt-2 sm:mt-0">
                View Details
              </Link>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default ReadBookList;
