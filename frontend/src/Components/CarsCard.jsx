import { Container, Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import Cars from '../Cars.json';


function CarsCard() {
    const navigate = useNavigate()
    return (
        <Container>
            <h1>All Cars</h1>
            <Grid container spacing={1}>

                {Cars.map(car => {
                    return (
                        <Grid item lg={4} sm={12} md={6} marginY={1}>

                            <Card sx={{ minHeight: 400 }}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    minHeight="240"

                                    image={car.img}
                                    sx={{ maxHeight: 200 }}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {car.manufacturer} {car.model}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Fugit nisi distinctio tempora praesentium, dolorem nostrum a nesciunt id aspernatur dolor.
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    {/* <Button size="small">Share</Button> */}
                                    <Button size="large" variant='outlined' color='success' marginX={5} onClick={() => navigate('/carinfo')}>Book</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    )
                })}
            </Grid>
        </Container >
    )
}



export default CarsCard




