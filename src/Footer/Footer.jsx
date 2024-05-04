import React from 'react';
import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <>
        <div className="my-8"></div>
        <footer className="w-full bg-gray-900 text-white py-20 px-20">
            <div className="flex flex-col ml-7">
                <h1 className="text-left font-montserrat font-bold text-lime-700 text-3xl" style={{ fontFamily: 'Orelega One, cursive' }}>Foody.</h1>
                <div className="max-w-7xl mx-auto grid gap-8">
                    <div className="flex items-center mb-12">
                        {/* Let's do it together */}
                        <div className="mr-4">
                            <h3 className="font-bold italic text-2xl">Let's do it together</h3>
                            <p className="text-lg line-clamp-3">Foody business</p>
                            <p className="text-lg line-clamp-3">Foody for business</p>
                            <p className="text-lg line-clamp-3">Couriers</p>
                            <p className="text-lg line-clamp-3">Careers</p>
                        </div>
                        {/*Links of interest*/}
                        <div className="ml-12">
                            <h3 className="font-bold italic text-2xl">Links of interest</h3>
                            <p className="text-lg line-clamp-3">About us</p>
                            <p className="text-lg line-clamp-3">Foody Prime</p>
                            <p className="text-lg line-clamp-3">FAQ</p>
                            <p className="text-lg line-clamp-3">Contact us</p>
                            <p className="text-lg line-clamp-3">Security</p>
                        </div>
                        {/* Follow us */}
                        <div className="ml-12">
                            <h3 className="font-bold italic text-2xl mr-8">Follow us</h3>
                                <p className="text-lg line-clamp-3"><FacebookIcon/>Facebook</p>
                                <p className="text-lg line-clamp-3"><XIcon />Twitter</p>
                                <p className="text-lg line-clamp-3"><InstagramIcon />Instagram</p>
                        </div>
                        {/* TERMS & CONDITIONS */}
                        <div className="ml-12">
                            <h3 className="font-bold italic text-2xl mt-12">Terms & Conditions</h3>
                            <p className="text-lg line-clamp-3">Cookies Policy</p>
                            <p className="text-lg line-clamp-3">Compliance</p>
                            <p className="text-lg line-clamp-3">Privacy Policy</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col">
                    {/* Top categories this month */}
                    <h2 className="text-left font-bold italic text-2xl mb-8">Top categories this month:</h2>
                    <p className="text-left mb-8">Pizza - Flowers - Tacos - Pharmacy - Breakfast - Lunch</p>
                    <p className="text-left mb-8">See all categories</p>   
                </div>
            </div>
        </footer>
    </>
    
  );
}

export default Footer;
