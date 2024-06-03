import { RiEBike2Line } from "react-icons/ri";
import { IoMdTime } from "react-icons/io";
import { AiTwotoneLike } from "react-icons/ai";
import { IoLocation } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import { useState } from 'react';

const ImgContainer = ({ restaurantName, restaurantAddress, coverPic }) => {
    const [selectedFilter, setSelectedFilter] = useState('Recommended');

    // Function to handle filter change
    const handleFilterChange = (e) => {
        setSelectedFilter(e.target.value);
    }

    return (
        <div className="flex flex-col items-center pb-10">
            <div style={{ width: '90vw', height: '22.5vw', backgroundImage: `url(${coverPic})`, backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }} className="mt-9 ">
                <div className="absolute inset-0" style={{background: 'linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.8) 100%)'}}></div>
                <div className="absolute right-0 bottom-5 flex text-white text-4xl mb-2 pr-10 space-x-3">
                    <div style={{ backgroundColor: '#87A922' }} className="rounded-full p-3 flex items-center space-x-2">
                        <RiEBike2Line className="text-3xl" />
                        <p className="text-xl">18 MAD</p>
                    </div>
                    <div style={{ backgroundColor: '#87A922' }} className="rounded-full p-3 flex items-center space-x-2">
                        <IoMdTime className="text-3xl" />
                        <p className="text-xl">15 - 20 mn'</p>
                    </div>
                    <div style={{ backgroundColor: '#87A922' }} className="rounded-full p-3 flex items-center space-x-2">
                        <AiTwotoneLike className="text-3xl" />
                        <p className="text-xl">90%</p>
                    </div>
                </div>
                <div className="absolute bottom-5 left-0 pl-10 p-1">
                    <h2 className="text-white text-5xl font-bold">{restaurantName}</h2>
                    <div className="flex items-center text-white text-lg">
                        <IoLocation className="text-lg" />
                        <p className="ml-2">{restaurantAddress}</p>
                    </div>
                </div>
            </div>
            <div style={{ width: '90vw' }} className="mt-4">
                <div className="text-xl grid grid-cols-4 gap-2 items-center justify-center w-full">
                    <div className="relative col-span-3">
                        <input type="text" placeholder="Search this restaurant" className="p-4 border border-stone-800 w-full" style={{ borderRadius: '40px' }} />
                        <button style={{ backgroundColor: '#87A922' }} className="text-white rounded-full p-3  absolute right-1 top-0 mt-2 mr-8 text-xl">
                            <FiSearch />
                        </button>
                    </div>
                    <div className="relative">
                        <select className="p-4 border border-gray-300 w-full col-span-1" style={{ borderRadius: '40px', appearance: 'none', paddingRight: '2.5rem' }} onChange={handleFilterChange}>
                            <option value="Recommended">Recommended</option>
                            <option value="Most Popular">Most Popular</option>
                            <option value="Highest Rating">Highest Rating</option>
                            <option value="Fastest Delivery">Fastest Delivery</option>
                        </select>
                        <IoIosArrowDown className="absolute right-0 top-0 mt-5 mr-3 text-xl pointer-events-none" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ImgContainer;