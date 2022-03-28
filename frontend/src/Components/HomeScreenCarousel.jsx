import React from 'react'
import { Paper, Button, Box, Grid } from '@mui/material'
import Carousel from 'react-material-ui-carousel'
import Cars from '../Cars.json'


function HomeScreenCarousel() {
    return (
        <Carousel marginY={2} >
            {
                Cars.map((item, i) => <CarouselItem key={i} item={item} />)
            }
        </Carousel>
    )
}

function CarouselItem(props) {
    return (
        <Grid container spacing={2} style={{ display: "flex", alignItems: "center", justifyContent: 'space-between' }}>
            <Grid item xs={12} md={6} >


                <img src={props.item.img} alt="" style={{ maxWidth: "100%", height: "auto", objectFit: "cover" }} />

            </Grid>
            <Grid item xs={12} md={6}>


                <h2>{props.item.manufacturer}</h2>
                <p>{props.item.model}</p>

            </Grid>

        </Grid>
    )
}




export default HomeScreenCarousel