import React from 'react'
import { Container } from '@mui/material'
import Cars from '../../../Cars.json'
import HomeScreenCarousel from '../../HomeScreenCarousel'
import HomePageCards from '../../HomePageCards'
import HomeBanner from '../../HomeBanner'
import { Box } from '@mui/system'



function HomeScreen() {

    return (
        <Box marginY={1}>
            <Container>
                <HomeBanner />
                <HomePageCards />

                <HomeScreenCarousel />
            </Container>


        </Box>
    )
}

export default HomeScreen