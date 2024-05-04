import React from 'react'
import { Card, CardContent, Typography, CardMedia } from '@mui/material';
import Value1 from '../Images/Value1.png'
import Value2 from '../Images/Value2.png'
import Value3 from '../Images/Value3.png'

const ValuesSection = () => {
  return (
    <>
    <div className="my-[50px]"></div>
      <div className="flex flex-col ml-10">
        <h2 className='font-extrabold text-left ml-10 text-2xl'>Our Values</h2>
        <div className="w-full mx-auto mt-16 flex justify-center items-center space-x-4">
            {/*First Value*/}
        <Card className='shadow-lg' sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 250 }}
                image={Value1}
                title="Inclusivity Value"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" className='font-semibold text-left text-base'>
                Inclusivity
                </Typography>
                <Typography variant="body2" color="text.secondary" className="font-light text-slate-500 text-left mb-8">
                We welcome restaurants of all sizes and backgrounds onto our platform,
                celebrating the diversity of Moroccan cuisine.
                </Typography>
            </CardContent>
        </Card>
            {/*Second Value*/}
        <Card className='shadow-lg' sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 250 }}
                image={Value2}
                title="Transparency Value"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" className='font-semibold text-left text-base'>
                Transparency
                </Typography>
                <Typography variant="body2" color="text.secondary" className="font-light text-slate-500 text-left mb-8">
                We believe in honest and open communication with our partners and customers, 
                building trust through transparency.
                </Typography>
            </CardContent>
        </Card>
            {/*Third Value*/}
        <Card className='shadow-lg' sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 250 }}
                image={Value3}
                title="Community Value"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div" className='font-semibold text-left text-base'>
                Community
                </Typography>
                <Typography variant="body2" color="text.secondary" className="font-light text-slate-500 text-left mb-8">
                We're committed to fostering a sense of community among restaurants, 
                delivery drivers, and food lovers across Morocco.
                </Typography>
            </CardContent>
        </Card>
        </div>
      </div>
    </>
  )
}

export default ValuesSection
