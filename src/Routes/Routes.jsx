import React from 'react';
import { createBrowserRouter} from 'react-router';
import Root from '../Pages/Root/Root';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home';
import BookDetails from '../Pages/BookDetails';
import ReadList from '../Pages/ReadList';

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
          path:'readList',
          loader: () => fetch('/booksData.json'),
          Component:ReadList
        },
        {
          path: '/bookDetails/:id',
          Component: BookDetails,
          loader: () => fetch('/booksData.json')
        }
    ]
  },
]);