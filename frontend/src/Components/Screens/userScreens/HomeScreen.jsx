import React, { useEffect } from 'react'
import { Container } from '@mui/material'
import Cars from '../../../Cars.json'
import HomeScreenCarousel from '../../HomeScreenCarousel'
import HomePageCards from '../../HomePageCards'
import HomeBanner from '../../HomeBanner'
import CarsCard from '../../CarsCard'
import AllCars from './AllCars'
import { Box } from '@mui/system'




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