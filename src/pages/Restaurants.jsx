import React, { useState, useEffect } from 'react';
import { allRestaurants } from '../Api/restauApi';
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom'; // Assurez-vous d'utiliser react-router-dom

const Restaurants = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [isLoading, setIsLoading] = useState(false); // Track loading state
  const [error, setError] = useState(null); // Store any errors

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await allRestaurants();
        if (!Array.isArray(response.data)) {
          console.warn("Fetched Restaurants data is not an array");
        } else {
          setRestaurants(response.data);
        }
      } catch (error) {
        setError(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      {isLoading && (
        <button
          disabled
          type="button"
          className="py-2.5 px-5 me-2 text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-blue-700 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 inline-flex items-center"
        >
          <svg
            aria-hidden="true"
            role="status"
            className="inline w-4 h-4 me-3 text-gray-200 animate-spin dark:text-gray-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="#1C64F2"
            />
          </svg>
          Loading...
        </button>
      )}

      <div className="mt-20 ml-20 mr-20">
        {error && <p>Error fetching restaurants: {error.message}</p>}
        {!isLoading && !error && restaurants.length === 0 && <p>No Restaurants found.</p>}
        <div className="grid grid-cols-3 justify-items-stretch gap-6 mt-20">
          {restaurants.map((restaurant) => (
            <Link to={`/Restaurants/${restaurant._id}`} key={restaurant._id} className="rounded overflow-hidden shadow-2xl bg-white transition-transform transform hover:scale-105 hover:shadow-3xl">
              <div className="rounded overflow-hidden shadow-2xl bg-white">
                <img
                  className="w-full h-48 object-cover"
                  src={`https://res.cloudinary.com/dqefiv2ah/image/upload/v1715601935/restau_card/${restaurant.image}`}
                  alt={restaurant.name}
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2 text-gray-900">{restaurant.name}</div>
                  <div className="flex items-center text-gray-700 text-base mb-2">
                    <FaMapMarkerAlt className="mr-2 text-lime-600" />
                    {restaurant.address}
                  </div>
                  <div className="flex items-center text-lime-600 text-lg font-bold">
                    <FaPhoneAlt className="mr-2" />
                    {restaurant.phoneNumber}
                  </div>
                </div>
                <div className="px-6 pt-4 pb-2">
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #restaurant
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #food
                  </span>
                  <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                    #dining
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Restaurants;
