import { Container, Grid } from '@mui/material';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllCars } from '../Redux/Features/carFeatures/getAllCarsFeature';


function CarsCard() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const allCars = useSelector((state) => {
        return state['allCars']
    })

    console.log(allCars.cars)
    let cars = allCars.cars

    useEffect(() => {
        dispatch(getAllCars())
    }, [])


    return (
        <Container>
            <h1>All Cars</h1>
            <Grid container spacing={1}>

                {cars.map(car => {
                    return (
                        <Grid item lg={4} sm={12} md={6} marginY={1}>

                            <Card sx={{ minHeight: 400 }}>
                                <CardMedia
                                    component="img"
                                    alt={car.carModel}
                                    minHeight="240"
                                    image={car.image1}
                                    sx={{ maxHeight: 200 }}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {car.make} {car.carModel}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        {car.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    {/* <Button size="small">Share</Button> */}
                                    <Button size="large" variant='outlined' color='success' marginX={5} onClick={() => navigate(`/carDetails/${car._id}`)}>Book</Button>
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




