import { Container } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CarsCard from '../../CarsCard'
import HomeBanner from '../../HomeBanner'
import HomePageCards from '../../HomePageCards'
import HomeScreenCarousel from '../../HomeScreenCarousel'




function HomeScreen() {

    const navigate = useNavigate()

    const userData = useSelector((state) => {
        return state['logedInUser']
    })

    const { user, error, logding } = userData

    // useEffect(() => {
    //     if (!user) {
    //         navigate('/login')
    //     }
    // }, [navigate, user])

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