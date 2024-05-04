import React from 'react'
import { Box, Typography, Card, CardMedia } from '@mui/material';
import moroccan from '../Images/moroccan.png'

const WhyMoroccanSection = () => {
  return (
    <>
    <div className="my-[50px]"></div>
    <div className="flex flex-col justify-content">
        <h2 className='font-extrabold text-left ml-10 text-2xl'>Why Moroccan?</h2>
        <div className="my-10">
      <div className="container mx-auto grid grid-cols-2 gap-8">
        {/* Text content */}
        <div>
          <Typography variant="h6" className="font-light text-xl text-slate-500 text-left mb-8" style={{ lineHeight: '48px' }}>
            Morocco's rich culinary heritage and vibrant food culture inspire everything we do.
          </Typography>
          <Typography variant="h5" className="font-semibold text-2xl text-left mb-8" style={{ lineHeight: '60px' }}>
            We're proud to celebrate the diversity and creativity of Moroccan cuisine, from traditional tagines to modern fusion dishes.
          </Typography>
        </div>

        {/* Image */}
        <Card className="max-w-md">
          <CardMedia
            component="img"
            image={moroccan}
            alt="Moroccan Cuisine"
            className=""
          />
        </Card>
      </div>
    </div>
    </div>
    
    </>
  )
}

export default WhyMoroccanSection
