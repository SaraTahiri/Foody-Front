import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import foodonline from '../Images/foodonline.png';
import fastdeliveryman from '../Images/fastdeliveryman.png';
import bestservice from '../Images/bestservice.png';

const WhatWeServe = () => {
  return (
    <>
      <div className="my-8"></div>
      <div className="flex flex-col justify-between">
        <div className="mx-auto">
          <h3 className="font-lato font-semibold text-lg text-lime-600 mt-4">What we serve</h3>
          <h4 className="text-center font-bold text-3xl text-black my-8" style={{ fontFamily: 'Orelega One, cursive' }}>Your Favorite Food Delivery Partner</h4>
        </div>
        <div className="ml-[200px] mr-[150px] flex gap-x-10">
          {/* Easy to Order */}
          <Card className="max-w-[250px] max-h-[350px]">
            <img src={foodonline} alt="Easy to order image" />
            <CardContent>
              <Typography variant="h5" component="h2" className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Easy To Order
              </Typography>
              <Typography variant="body2" color="text.secondary" className="font-normal text-gray-700 dark:text-gray-400">
                You Only need a few steps in ordering food
              </Typography>
            </CardContent>
          </Card>
          {/* Fast Delivery */}
          <Card className="max-w-[250px] max-h-[350px]">
            <img src={fastdeliveryman} alt="Fast delivery image" />
            <CardContent>
              <Typography variant="h5" component="h2" className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Fastest Delivery
              </Typography>
              <Typography variant="body2" color="text.secondary" className="font-normal text-gray-700 dark:text-gray-400">
                Delivery that is always on time even faster
              </Typography>
            </CardContent>
          </Card>
          {/* Best Quality */}
          <Card className="max-w-[250px] max-h-[350px]">
            <img src={bestservice} alt="Best quality image" />
            <CardContent>
              <Typography variant="h5" component="h2" className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Best Quality
              </Typography>
              <Typography variant="body2" color="text.secondary" className="font-normal text-gray-700 dark:text-gray-400">
                Not only fast for us quality is also number one
              </Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}

export default WhatWeServe ;
