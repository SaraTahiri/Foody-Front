import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import Grid from '@mui/material/Grid';
import macdo from '../Images/macdo.png';

export default function MostRestauLiked() {
  // Utiliser un tableau pour stocker l'état "Liked" pour chaque carte
  const [likedStates, setLikedStates] = useState(Array.from({ length: 5 }, () => false));

  // Fonction pour basculer l'état "Liked" d'une carte spécifique
  const handleLikeClick = (index) => {
    const newLikedStates = [...likedStates];
    newLikedStates[index] = !newLikedStates[index];
    setLikedStates(newLikedStates);
  };

  return (
    <>
      <div className="my-[50px]"></div>
      <div className="flex flex-col justify-between">
        <div className="mx-auto ">
          <h2 className="font-semibold tracking-tight uppercase text-4xl text-gray-900 dark:text-white" style={{ fontFamily: 'Orelega One, cursive' }}>Restaurants You Might Like</h2>
          <br />
          <p className="pl-20 pr-20 font-lato font-semibold indent-1.5 text-lg text-gray-600 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem fugit quidem consequatur, earum deserunt amet ut? Quasi maxime, atque doloribus neque repudiandae ea aspernatur est modi, facilis voluptatem velit provident.</p>
        </div>
        <div className="my-[50px]"></div>
        <Grid container spacing={4} justifyContent="center">
          {[...Array(5)].map((_, index) => (
            <div className="mr-4 flex flex-row justify-between space-x-4" key={index}>
              <div className="shadow-2xl">
                <Card sx={{ maxWidth: 195 }}>
                  <CardMedia
                    component="img"
                    alt="Macdo"
                    height="140"
                    image={macdo}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      McDonald's
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      Description Here
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small" onClick={() => handleLikeClick(index)} color={likedStates[index] ? "primary" : "inherit"}>
                      <ThumbUpOffAltIcon color={likedStates[index] ? 'primary' : 'inherit'} />
                    </Button>
                    <Button size="small">See More</Button>
                  </CardActions>
                </Card>
              </div>
            </div>
          ))}
        </Grid>
      </div>
    </>
  );
}
