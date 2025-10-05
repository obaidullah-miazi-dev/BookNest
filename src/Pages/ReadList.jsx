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
    const [readList,setReadList] = useState([])

    useEffect(()=>{
        const storedBooks = getStoredBook()
        const convertedStoredBooks = storedBooks.map(id => parseInt(id))
        const myReadList = data.filter(book => convertedStoredBooks.includes(book.bookId))
        setReadList(myReadList)
    },[data])
    return (
        <>
            <Container>
                <h2 className='mt-8 text-4xl font-bold text-center text-green-600'>All Listed Books</h2>
                <Tabs className='mt-12'>
                    <TabList>
                        <Tab>Read Books</Tab>
                        <Tab>Wishlist Books</Tab>
                    </TabList>

                    <TabPanel className='mt-8 space-y-5'>
                        {
                            readList.map((b,index) => <ReadBookList key={index} book={b}></ReadBookList>)
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