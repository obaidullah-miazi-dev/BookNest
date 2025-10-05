import React from 'react';
import Container from './Container';
import { Menu } from 'lucide-react';
import { Link } from 'react-router';

const Navbar = () => {
    return (
        <div className=" bg-white">
            <Container>
                <nav className="py-4 flex justify-between items-center mt-5">
                    <a href='/' className="md:text-3xl text-sm font-bold cursor-pointer">Book Nest</a>
                    <div className='md:flex hidden items-center gap-12 font-semibold text-lg'>
                        <Link to='/'><p className="text-gray-600">
                            Home
                        </p>
                        </Link>
                        <Link to='/readList'><p className="text-gray-600">
                            Listed Books
                        </p></Link>
                        <Link><p className="text-gray-600">
                            Pages to Read
                        </p>
                        </Link>
                    </div>

                    <div className="md:flex hidden items-center gap-12 font-semibold text-lg">

                        <div>
                            <button className="bg-[#23BE0A] text-white px-6 py-3 font-semibold rounded-lg hover:cursor-pointer mr-4">
                                Sign In
                            </button>
                            <button className="bg-[#59C6D2] text-white px-6 py-3 font-semibold rounded-lg hover:cursor-pointer">
                                Sign Up
                            </button>
                        </div>
                    </div>
                    <div className="block md:hidden">
                        <div className="drawer">
                            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                            <div className="drawer-content">

                                <label htmlFor="my-drawer" className="btn drawer-button"><Menu /></label>
                            </div>
                            <div className="drawer-side w-5/10">
                                <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
                                <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4 space-y-4 font-semibold">

                                    <a href="#home" className="text-gray-600">
                                        Home
                                    </a>
                                    <a href="#home" className="text-gray-600">
                                        Listed Books
                                    </a>
                                    <a href="#home" className="text-gray-600">
                                        Pages to Read
                                    </a>
                                </ul>
                            </div>
                        </div>
                    </div>
                </nav>
            </Container>
        </div>
    );
};

export default Navbar;