import React from 'react';
import Container from '../Components/Container';
import HeroBook from '../assets/hero-book.png'

const Home = () => {
    return (
        <>
            <Container>
                <div className="px-48 py-20 bg-base-200 mt-12 rounded-lg">
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-5xl font-bold">Books to freshen up <br className='hidden md:block' /> your bookshelf</h1>
                            <button className="bg-[#23BE0A] text-white font-semibold px-5 py-3 rounded-lg mt-8">View The List</button>
                        </div>
                        <img src={HeroBook}/>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default Home;