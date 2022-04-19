import { Container } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import CarsCard from '../../CarsCard'
import HomeBanner from '../../HomeBanner'
import HomePageCards from '../../HomePageCards'
import HomeScreenCarousel from '../../HomeScreenCarousel'




function HomeScreen() {

    return (
        <Box >
            <Container>
                <HomeBanner />
                <HomePageCards />
                <HomeScreenCarousel />
                <CarsCard />
                {/* <AllCars /> */}
            </Container>


        </Box>
    )
}

export default HomeScreen