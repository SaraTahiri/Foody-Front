import React, { useState, useContext, useRef, useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { IoSearch } from "react-icons/io5";
import { BsCart4 } from "react-icons/bs";
import '../Home/Css/orelega-one.css';
import logo from '../assets/logo.png';
import { UserContext } from '../Context/UserContext';
import Login from "../Login/Login";

const Header = () => {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const { user, setUser } = useContext(UserContext);
    const dropdownRef = useRef(null);

    const openLoginModal = () => setShowLoginModal(true);
    const closeLoginModal = () => setShowLoginModal(false);

    const toggleDropdown = () => setShowDropdown(!showDropdown);
    const closeDropdown = () => setShowDropdown(false);

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            closeDropdown();
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <div>
            <Navbar className="w-full bg-inherit">
                <div className="container mx-auto flex justify-between items-center">
                    <div>
                        <img src={logo} width="102" height="32" alt="Logo" />
                    </div>
                    <div className="flex justify-between items-center">
                        <Nav className="mr-auto space-x-12">
                            <Nav.Link href="/" className="text-lime-700 text-sm font-semibold">Home</Nav.Link>
                            <Nav.Link href="/Restaurants" className="text-lime-700 text-sm font-semibold">Restaurants</Nav.Link>
                            <Nav.Link href="/Menus" className="text-black text-sm font-semibold">Menus</Nav.Link>
                            <Nav.Link href="/AboutUs" className="text-black text-sm font-semibold">About Us</Nav.Link>
                            <Nav.Link href="#" className="text-black text-sm font-semibold">Contact</Nav.Link>
                        </Nav>
                    </div>
                    <div className="flex items-center space-x-2">
                        <div className="w-10 h-10 flex items-center justify-center rounded-full">
                            <IoSearch size={15} />
                        </div>
                        <div className="w-10 h-10 flex items-center justify-center rounded-full">
                            <BsCart4 size={15} />
                        </div>
                        {user ? (
                            <div className="relative" ref={dropdownRef}>
                                <img
                                    key="avatarButton"
                                    type="button"
                                    onClick={toggleDropdown}
                                    className="w-10 h-10 rounded-full cursor-pointer"
                                    src="/docs/images/people/profile-picture-5.jpg"
                                    alt={user.username}
                                />
                                {showDropdown && (
                                    <div
                                        key="userDropdown"
                                        className="absolute right-0 z-10 mt-2 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                                    >
                                        <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
                                            <div>{user.username}</div>
                                            <div className="font-medium truncate">{user.email}</div>
                                        </div>
                                        <ul className="py-2 text-sm text-gray-700 dark:text-gray-200">
                                            <li>
                                                <a href="/profile" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                                            </li>
                                            <li>
                                                <a href="#" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                                            </li>
                                        </ul>
                                        <div className="py-1">
                                            <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white">Sign out</a>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="bg-white rounded-full px-3 py-1 text-xs font-semibold">
                                <button onClick={openLoginModal} className="bg-white rounded-full px-3 py-1 text-xs font-semibold">
                                    Log In
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </Navbar>
            <Login show={showLoginModal} onClose={closeLoginModal} />
        </div>
    );
};

export default Header;
