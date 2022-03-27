import React from 'react'
import { Paper, Button, Box } from '@mui/material'
import Carousel from 'react-material-ui-carousel'
import Cars from '../Cars.json'


function HomeScreenCarousel() {
    return (
        <Carousel marginY={2} >
            {
                Cars.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}

function Item(props) {
    return (
        <Paper style={{ display: "flex", alignItems: "center", justifyContent: 'space-between' }}>
            <Box >
                <img src={props.item.img} alt="" style={{ maxWidth: "40em", height: "30em", objectFit: "cover" }} />
            </Box>
            <Box>
                <h2>{props.item.manufacturer}</h2>
                <p>{props.item.model}</p>
                <Button className="CheckButton">
                    Check it out!
                </Button>
            </Box>

        </Paper>
    )
}




export default HomeScreenCarousel