import React from 'react'
import '../Css/style.css'
import { Card, CardContent, Typography } from '@mui/material';
import tajines from '../Images/tajines.png'

const Vision = () => {
  return (
    <>
    <div className="my-[50px]"></div>
    <div className="flex-col">
        <p className='text-slate-500 text-center underline text-2xl text-balance' style={{fontFamily:'Lato,sans-serif'}}>Our mission is to empower Moroccan restaurants of all sizes by providing them with the  tools
        and support they need to succeed in an increasingly competitive  market. We believe that 
        every restaurant deserves a chance to showcase  their unique flavors and culinary talents to a
        wider audience</p>
        <div className="w-full mx-auto mt-24 flex justify-center items-center">      
        {/* Image */}
        <div className="w-[50%] h-[500px] rounded-l-full bg-cover bg-center" style={{ backgroundImage: `url(${tajines})` }}></div>

        {/* Text content */}
        <div className="w-[60%] bg-white grid grid-cols-1 gap-4 place-items-center items-stretch">
            <div className="w-full h-full flex flex-col justify-center px-8 py-20">
            {/* The vision */}
            <Typography variant="h6" className="font-serif font-extrabold text-lg tracking-wide underline text-black mb-8">
                The vision
            </Typography>

            {/* Vision statement */}
            <Card className="w-full max-w-[600px] mx-auto shadow-lg">
                <CardContent>
                <Typography variant="body1" className="font-light text-slate-500 text-left indent-8 mb-8">
                    We envision a future where every corner of Morocco is buzzing with the  aromas of delicious food from local kitchens.
                </Typography>
                <Typography variant="body1" className="font-normal text-black text-left indent-8 mb-8">
                    Through our platform, we  aim to make it easier than ever for customers to discover new dining  experiences and for restaurants to grow their businesses sustainably.
                </Typography>
                </CardContent>
            </Card>
            </div>
        </div>
        </div>
    </div>
      
    </>
  )
}

export default Vision
