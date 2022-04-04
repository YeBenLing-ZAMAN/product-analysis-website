import React from 'react';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
    return (
        <div className='bg-zinc-100 shadow-lg sticky top-0'>
        <nav className='flex justify-around py-8 px-8'>
            <div>
                <h1 className='text-3xl hidden md:block'>Adventure Anime...</h1>
            </div>
            <div className='CustomLink-container flex justify-around'>
                <CustomLink to="/">Home</CustomLink>
                <CustomLink to="/reviews">Reviews</CustomLink>
                <CustomLink to="/dashboard">DashBoard</CustomLink>
                <CustomLink to="/blogs">Blogs</CustomLink>
                <CustomLink to="/about">About</CustomLink>
            </div>
        </nav>
    </div>
    );
};

export default Header;