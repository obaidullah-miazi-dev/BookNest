import React from 'react';
import { createBrowserRouter} from 'react-router';
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home';
import BookDetails from '../Pages/BookDetails';

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
        {
            index: true,
            loader: () => fetch('/booksData.json'),
            path:'/',
            Component: Home
        },
        {
          path: '/bookDetails/:id',
          Component: BookDetails,
          
        }
    ]
  },
]);