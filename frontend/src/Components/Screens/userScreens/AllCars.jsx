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
import { getAllCars } from '../../../Redux/Features/carFeatures/getAllCarsFeature';




function AllCars() {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    let CarData = useSelector((state) => {
        return state['allCars']
    })

    let { loading, cars, error } = CarData

    console.log(CarData)
    useEffect(() => {
        dispatch(getAllCars())
    }, [dispatch])

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
                                    alt="green iguana"
                                    minHeight="240"

                                    image={car.image}
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

export default AllCars