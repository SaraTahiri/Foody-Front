import React, { useState } from 'react'; // Importing useState
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { lightGreen, red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Grid from '@mui/material/Grid';
import penne from '../Images/penne.png';


const StyledFavoriteIcon = styled(FavoriteIcon)(({ theme, favorite }) => ({
  color: favorite ? red[500] : 'inherit',
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
}));

const StyledAddShoppingCartIcon = styled(AddShoppingCartIcon)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
  color: lightGreen[600],
}));

export default function TrendMenu() {
  const [expanded, setExpanded] = useState(false); // Using useState for expanded state
  const [favoriteStates, setFavoriteStates] = useState(Array.from({ length: 3 }, () => false)); // Using useState for favoriteStates

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleFavoriteClick = (index) => {
    const newFavoriteStates = [...favoriteStates];
    newFavoriteStates[index] = !newFavoriteStates[index];
    setFavoriteStates(newFavoriteStates);
  };

  return (
    <div className="flex flex-col justify-between">
        <div className="mx-auto ">
            <h2 className="font-semibold tracking-tight uppercase text-4xl text-gray-900 dark:text-white" style={{ fontFamily: 'Orelega One, cursive' }}>Trending meals</h2>
            <br />
            <p className="pl-20 pr-20 font-lato font-semibold indent-1.5 text-lg text-gray-600 mt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem fugit quidem consequatur, earum deserunt amet ut? Quasi maxime, atque doloribus neque repudiandae ea aspernatur est modi, facilis voluptatem velit provident.</p>
        </div>

        <div className="my-[50px]"></div>
        <Grid container spacing={2} justifyContent="center">
            {[...Array(3)].map((_, index) => (
                <Grid item key={index} xs={12} sm={6} md={4} lg={3}>
                    <Card sx={{ maxWidth: 250 }}>
                        <CardHeader
                            avatar={
                            <Avatar sx={{ bgcolor: lightGreen[600] }} aria-label="recipe">
                                R
                            </Avatar>
                            }
                            action={
                            <IconButton aria-label="settings">
                                <MoreVertIcon />
                            </IconButton>
                            }
                            title="Restaurant Owner"
                            subheader="Date"
                        />
                        <CardMedia
                            className=""
                            component="img"
                            height="194"
                            image={penne}
                            alt="Penne"
                        />
                        <CardContent>
                            <Typography variant="body2" color="text.secondary">
                            Description Here
                            </Typography>
                        </CardContent>
                        
                        <div className="flex mr-4 items-center justify-between">
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites" onClick={() => handleFavoriteClick(index)}>
                                  <StyledFavoriteIcon favorite={favoriteStates[index]} />
                                </IconButton>
                            </CardActions>
                            <Button aria-label="add to shopping cart"><StyledAddShoppingCartIcon /></Button>
                        </div>
                    </Card>
                </Grid>
            ))}
        </Grid>
    </div>
  );
}
