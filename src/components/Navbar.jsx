import React from 'react';
import logo from '../assets/logo.png';

const Navbar = () => {
    return (
        <div className="container mx-auto pt-3.5">
            <div className="flex justify-between items-center px-4 py-2 text-xs-13 text-grey">
                <div>
                    <img src={logo} className='' width="102" height="32" alt="Logo" />
                </div>

                <div className="right-90">
                    <button className='px-4 py-2 hover:bg-zinc-100 rounded-2xl text-black ml-2'>Home</button>
                    <button className='px-4 py-2 hover:bg-zinc-100 rounded-2xl text-neutral-400 ml-2'>Restaurants</button>
                    <button className='px-4 py-2 hover:bg-zinc-100 rounded-2xl text-neutral-400 ml-2'>Menus</button>
                    <button className='px-4 py-2 hover:bg-zinc-100 rounded-2xl text-neutral-400 ml-2'>About us</button>
                    <button className='px-4 py-2 hover:bg-zinc-100 rounded-2xl text-neutral-400 ml-2'>Contact</button>
                </div>

                <div className="flex items-center">
                    <div className="search mr-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="border border-zinc-300 hover:shadow-xl transition duration-300 mr-4 rounded-full  px-3 py-3 ">
                            <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                        </svg>
                    </div>
                    <div className="basket-icon">
                        <button className="flex items-center px-3.5 py-3.5 border border-zinc-300 rounded-full ease-in-out hover:shadow-xl transition duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="mr-1 w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                            </svg>
                        </button>
                    </div>

                    <button className="flex items-center px-7 py-3 border border-zinc-300 rounded-3xl ease-in-out hover:shadow-xl transition duration-300 ml-2 p-5">
                        <span className="">Login</span>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;