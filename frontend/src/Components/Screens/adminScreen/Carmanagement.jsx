import { Button, Container, Grid } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { getAllCars } from '../../../Redux/Features/carFeatures/getAllCarsFeature'

const CarBox = styled.div`
-webkit-box-shadow: -1px 3px 30px 0px rgba(0,0,0,0.1);
-moz-box-shadow: -1px 3px 30px 0px rgba(0,0,0,0.1);
box-shadow: -1px 3px 30px 0px rgba(0,0,0,0.1);
border-radius:7px;
margin:1em;
padding:1em;
min-width:'80vw'


`


function Carmanagement() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const { cars, loading, error } = useSelector((state) => {
        return state['allCars']
    })

    useEffect(() => {
        dispatch(getAllCars())
    }, [dispatch])



    console.log(cars)

    return (
        <>
            <div>

                {cars.map((car) =>
                    <CarBox>

                        <Grid container style={{ backgroundColor: "", color: "black", listStyle: "none", display: 'flex', alignItems: "center", justifyContent: "space-evenly", gap: '1em', minWidth: '80vw' }}>

                            <Grid item lg={2} style={{ display: 'flex', justifyContent: "start", minWidth: "15em" }}>
                                <p>

                                    {car.make} {car.carModel}
                                </p>

                            </Grid>
                            <Grid item lg={2} style={{ display: 'flex', justifyContent: "start", minWidth: "15em", gap: '1em' }}><p>

                                {car.city}  {car.user}
                            </p>
                            </Grid>
                            <Grid item lg={2} style={{ display: 'flex', justifyContent: "start", minWidth: "15em" }} ><p>
                                <Button>view car</Button>
                            </p>
                            </Grid>
                            <Grid item lg={2}>
                                <img src={car.image1} style={{ height: '50px', width: "auto" }} alt="" />

                            </Grid>
                            {/* <Grid item lg={2}>

                            </Grid>
                            <Grid item lg={2}></Grid> */}
                        </Grid>
                    </CarBox>

                )}
            </div>

        </>
    )
}

export default Carmanagement