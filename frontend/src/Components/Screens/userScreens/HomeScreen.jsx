import { Container } from '@mui/material'
import { Box } from '@mui/system'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAllCars } from '../../../Redux/Features/carFeatures/getAllCarsFeature'
import CarsCard from '../../CarsCard'
import HomeBanner from '../../HomeBanner'
import HomePageCards from '../../HomePageCards'
import HomeScreenCarousel from '../../HomeScreenCarousel'
import CustomModal from '../CustomModal'
import { openModalAction } from '../../../Redux/uiFeatures/modalFeature'
// import { AllCars } from './AllCars'
import SampleTable from '../../SampleTable'


function HomeScreen() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const userData = useSelector((state) => {
        return state['logedInUser']
    })

    const { user, error, logding } = userData

    const modalHandler = () => {
        dispatch(openModalAction({ message: 'modal open', textOne: 'accept', colorOne: 'success', textTwo: 'wartext', colorTwo: 'warning' }))
    }

    useEffect(() => {
        dispatch(getAllCars())
    }, [dispatch])

    return (
        <Box >
            <Container>
                <HomeBanner />
                <HomePageCards />
                <HomeScreenCarousel />
                <CarsCard />
                {/* <SampleTable /> */}
            </Container>


        </Box>
    )
}

export default HomeScreen