import React from 'react';
import Container from '../Components/Container';
import Banner from '../Components/Banner';
import { useLoaderData } from 'react-router';
import Books from './Books';


const Home = () => {
    const data = useLoaderData()
    // console.log(data);
    return (
        <>
            <Container>
              <Banner></Banner>
              <Books data={data}></Books>
            </Container>
        </>
    );
};

export default Home;