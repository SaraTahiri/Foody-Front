import React from 'react'
import '../Css/style.css'
import Box from '@mui/material/Box';
import CoverImage from '../Images/images.jpg'

const FirstPart = () => {
  return (
    <>
      <Box sx={{backgroundImage: `url(${CoverImage})`, 
                backgroundRepeat: "no-repeat", 
                backgroundSize: "cover", 
                height: '700px', 
                width: '1200px',
                display : 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'left',
                color: 'white'}}>
        <h2 style={{fontSize:'4rem'}}>Made by <span style={{fontFamily:'Libre Baskerville,serif'}}>Moroccans</span><br /> For <span style={{fontFamily:'Libre Baskerville,serif'}}>Moroccans</span>.</h2>
      </Box>
    </>
  )
}

export default FirstPart
