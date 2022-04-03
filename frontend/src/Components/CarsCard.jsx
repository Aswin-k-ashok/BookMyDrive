import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Grid, Container } from '@mui/material'
import Cars from '../Cars.json'
import Typography from '@mui/material/Typography';


function CarsCard() {
    return (
        <Container>
            <h1>All Cars</h1>
            <Grid container>

                {Cars.map(car => {
                    return (
                        <Grid item lg={4} marginY={1}>

                            <Card sx={{ maxWidth: 345 }}>
                                <CardMedia
                                    component="img"
                                    alt="green iguana"
                                    height="140"
                                    image={car.img}
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
                                    <Button size="large" variant='outlined' color='success' marginX={5}>Book</Button>
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




