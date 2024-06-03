import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import ImgContainer from '../components/ImgContainer';
import Card from '../components/Card';
import Footer from '../components/Footerbot';
import { restauProfile } from '../Api/restauApi'; // Assuming you have a function to fetch restaurant profile

const RestaurantProfile = () => {
    const [restaurant, setRestaurant] = useState(null); // Store the restaurant profile
    const [loading, setLoading] = useState(true); // Indicates whether the data is still loading
    const [error, setError] = useState(null); // Store any errors

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            setError(null);
      
            try {
              const response = await restauProfile();
              setRestaurant(response.data); // Assuming the API response contains the restaurant profile
            } catch (error) {
              setError(error);
            } finally {
                setLoading(false);
            }
          };
      
          fetchData();
    }, []);

    if (loading) {
        return <div>Loading...</div>; // Display a loading message while the data is being fetched
    }

    if (error) {
        return <div>Error: {error.message}</div>; // Display an error message if fetching fails
    }

    return (
        <div>
            {restaurant && (
                <>
                    <ImgContainer restaurantName={restaurant.name} restaurantAddress={restaurant.address} coverPic={restaurant.image} /> {/* Render the image container */}
                    <div className="grid grid-cols-4 gap-8 mt-10 ml-10 mr-10">
                        {/* Render a list of cards for each menu item */}
                        {restaurant.menus.map((menu) => (
                            <Card key={menu._id} title={menu.name} price={menu.price} imgUrl={menu.image} />
                        ))}
                    </div>
                </>
            )}
            <Footer />
        </div>
    );
};

export default RestaurantProfile;
