import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai'; // Import the heart icon
import { FaStar } from 'react-icons/fa'; // Import the star icon

const Card = ({ imgUrl, title, price, rating }) => {
    // Validate if rating is a valid number
    const isValidRating = !isNaN(rating) && rating >= 0 && rating <= 5;

    return (
        <div className="w-1/2 flex flex-col items-center gap-3">
            <div className="relative rounded-xl w-64 h-64 bg-cover bg-center" style={{ backgroundImage: `url(${imgUrl})` }}>
                <button className="absolute top-0 right-0 bg-white rounded-full p-2.5 m-3">
                    <AiOutlineHeart size={19} />
                </button>
            </div>
            <h2 className="text-xl font-lato pl-4 font-medium whitespace-nowrap">{title}</h2>
            <div className="flex">
                {/* Render stars only if rating is valid */}
                {isValidRating && [...Array(Math.floor(rating))].map((_, i) => <FaStar key={i} color="orange" />)}
            </div>
            <p className="text-xl font-lato font-medium">{price}</p>
            <button className="rounded-md w-64 h-12 border-2 font-lato font-3xl border-black">Add to Cart</button>
        </div>
    );
};

export default Card;