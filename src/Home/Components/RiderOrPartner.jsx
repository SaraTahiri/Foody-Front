import React from 'react';
import { Card, CardMedia, Button } from '@mui/material';
import { FaRegHandshake } from 'react-icons/fa';
import deliveryman from '../Images/deliveryman.png'
import partner from '../Images/partner.png'

const RiderOrPartner = () => {
  return (
    <>
    <div className="flex flex-col items-center justify-center space-y-10">
        <div className="mx-auto">
          <h4 className="text-center font-bold text-3xl text-black my-8" style={{ fontFamily: 'Orelega One, cursive' }}>Join Us</h4>
        </div>
        <div className="ml-[200px] mr-[150px] flex gap-x-10">
            {/* Become a rider and Become a partner */}
            <div className="flex justify-center space-x-12">
              {/* Become a rider */}
              <Card className="w-[300px] h-[480px] flex flex-col items-center justify-center bg-transparent" sx={{ border: 'none',maxWidth: 250 }}>
                <CardMedia
                  component="img"
                  image={deliveryman} 
                  alt="DeliveryMan" 
                  sx={{ width: 250, // Set the desired width
                        height: 250,
                        borderRadius: '50%' }} // Make the image round
                />
                <div className="text-lg font-bold">Become a Rider</div>
                <p className="text-center">Enjoy flexibility, freedom and competitive earnings by delivering through Foody.</p>
                <Button variant="outlined" color="success" className=" font-semibold mt-4 ml-4 w-48 h-12 border-transparent rounded-full left-109 top-552 bg-lime-600">
                  Register Here
                </Button>
              </Card>

              {/* Become a partner */}
              <Card className="w-[300px] h-[480px] flex flex-col items-center justify-center bg-transparent" sx={{ border: 'none',maxWidth: 250 }}>
                <CardMedia
                  component="img"
                  image={partner}
                  alt="Restaurant Owner"
                  sx={{ 
                    width: 250, // Set the desired width
                    height: 250,
                    borderRadius: '50%' }} // Make the image round
                />
                <div className="text-lg font-bold">Become a Partner</div>
                <p className="text-center">Enjoy flexibility, freedom and competitive earnings by delivering through Foody.</p>
                <Button variant="outlined" color="success" className=" font-semibold mt-4 ml-4 w-48 h-12 left-109 top-552 bg-lime-600">
                  Register Here
                </Button>
              </Card>
            </div>
        </div>
    </div>
    </>
  );
}

export default RiderOrPartner;