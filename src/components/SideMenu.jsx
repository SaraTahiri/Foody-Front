import React from 'react';
import { FaRegListAlt, FaUserCircle, FaRegCommentDots, FaWallet, FaRegChartBar, FaRegStar, FaRegIdBadge, FaBars } from 'react-icons/fa';
import Logo from '../assets/logo.png';

const SideMenu = ({ onMenuItemClick }) => {
    return (
        <>
            <div className="flex justify-center flex-col w-72 h-screen bg-white">
                <nav className='text-sm font-lato font-bold text-gray-500'>
                    <ul className="mt-9 pl-8">
                        <li>
                            <img src={Logo} alt="Logo" className="justify-center mb-20 w-30 h-15 mx-auto" />
                        </li>
                        <MenuItem icon={<FaBars className="w-5 h-5" />} name="Dashboard" onClick={() => onMenuItemClick(null)} />
                        <MenuItem icon={<FaRegListAlt className="w-5 h-5" />} name="Order List" onClick={() => onMenuItemClick('OrderList')} />
                        <MenuItem icon={<FaUserCircle className="w-5 h-5" />} name="Customer" onClick={() => onMenuItemClick('Customer')} />
                        <MenuItem icon={<FaRegCommentDots className="w-5 h-5" />} name="Chat" onClick={() => onMenuItemClick('Chat')} />
                        <MenuItem icon={<FaWallet className="w-5 h-5" />} name="Wallet" onClick={() => onMenuItemClick('Wallet')} />
                        <MenuItem icon={<FaRegChartBar className="w-5 h-5" />} name="Analytics" onClick={() => onMenuItemClick('Analytics')} />
                        <MenuItem icon={<FaRegStar className="w-5 h-5" />} name="Favorites" onClick={() => onMenuItemClick('Favorites')} />
                        <MenuItem icon={<FaRegIdBadge className="w-5 h-5" />} name="Customer Details" onClick={() => onMenuItemClick('CustomerDetails')} />
                    </ul>
                </nav>
            </div>
        </>
    );
};

const MenuItem = ({ icon, name, onClick }) => {
    return (
        <li className="flex items-center px-8 py-5 mb-4 transition-all duration-500 ease-in-out hover:bg-[#D9F3EA] hover:text-[#00B074] hover:border-l-4 hover:border-[#87A922]" onClick={onClick}>
            <div className="flex items-center">
                {icon}
                <span className="mx-4">{name}</span>
            </div>
        </li>
    );
};

export default SideMenu;