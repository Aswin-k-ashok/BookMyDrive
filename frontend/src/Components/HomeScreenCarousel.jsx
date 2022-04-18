import React from 'react'
import { Paper, Button, Box, Grid } from '@mui/material'
import Carousel from 'react-material-ui-carousel'
import Cars from '../Cars.json'
import { makeStyles } from '@mui/styles'
import { padding } from '@mui/system'
import styled from 'styled-components'

const CarouseOverlay = styled.div`
postion:absolute;
bottom: 20%;
display:flex;
justify-content:center;
gap:1em;
align-items:center;
-webkit-transition: all 0.3s ease-in-out;
-moz-transition: all 0.3s ease-in-out;
-o-transition: all 0.3s ease-in-out;
-ms-transition: all 0.3s ease-in-out;
transition: all 0.3s ease-in-out;

&:hover {
    background-color: lightblue;
  }

&:hover {
    postion:absolute;
    bottom: 20%;
    display:flex;
    color:blue;
    justify-content:center;
    gap:1em;
}
`;

const useStyles = makeStyles({
    carouselImage: {
        width: '100%',
        maxHeight: "30em",
        objectFit: "cover",

    },
    carouselText: {
        position: 'absolute',
        top: '0%',
        left: '0%',
        color: 'black',
        background: 'rgb(0,0,0)',
        background: 'linear-gradient(297deg, rgba(0,0,0,1) 0%, rgba(240,240,240,1) 50%, rgba(242,242,242,1) 100%)',
        padding: "2em",
        borderRadius: '6px'
    }

})


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
    const classes = useStyles()

    return (
        <Grid container >
            <h3>Premium segment</h3>
            <Grid item xs={12} >


                <img src={props.item.img} alt="" className={classes.carouselImage} />

                <CarouseOverlay>

                    <h2>{props.item.manufacturer}</h2>
                    <p>{props.item.model}</p>


                </CarouseOverlay>
            </Grid>


        </Grid>
    )
}




export default HomeScreenCarousel