import React, { useEffect, useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import Container from '../Components/Container';
import { useLoaderData } from 'react-router';
import { getStoredBook } from '../Utilities/addToDB';
import ReadBookList from '../Components/ReadBookList';

const ReadList = () => {
    const data = useLoaderData();
    // console.log(data);
    const [readList, setReadList] = useState([])
    const [sort, setSort] = useState('')

    useEffect(() => {
        const storedBooks = getStoredBook()
        const convertedStoredBooks = storedBooks.map(id => parseInt(id))
        const myReadList = data.filter(book => convertedStoredBooks.includes(book.bookId))
        setReadList(myReadList)
    }, [data])

    const handleSort = (type) => {
        setSort(type)
        if (type === 'Pages') {
            const sortedByPage = [...readList].sort((a, b) => a.totalPages - b.totalPages)
            setReadList(sortedByPage)
        }
        if(type === 'Ratings'){
            const sortedByRating = [...readList].sort((a,b)=> b.rating - a.rating)
            setReadList(sortedByRating)
        }
    }

    return (
        <>
            <Container>
                <h2 className='mt-8 text-4xl font-bold text-center text-green-600'>All Listed Books</h2>
                <div className="flex justify-center items-center mt-12">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn bg-[#23BE0A] rounded-lg text-white m-1 ">Sort By {sort ? sort : ''}</div>
                        <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                            <li><a onClick={() => handleSort("Pages")}>Pages</a></li>
                            <li><a onClick={() => handleSort("Ratings")}>Ratings</a></li>
                        </ul>
                    </div>
                </div>
                <Tabs className='mt-12'>
                    <TabList>
                        <Tab>Read Books</Tab>
                        <Tab>Wishlist Books</Tab>
                    </TabList>

                    <TabPanel className='mt-8 space-y-5'>
                        {
                            readList.map((b, index) => <ReadBookList key={index} book={b}></ReadBookList>)
                        }

                    </TabPanel>
                    <TabPanel>
                        <h2>Wishlist books</h2>
                    </TabPanel>
                </Tabs>
            </Container>
        </>
    );
};

export default ReadList;