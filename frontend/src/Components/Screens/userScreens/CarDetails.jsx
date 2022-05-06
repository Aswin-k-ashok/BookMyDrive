import DateFnsUtils from '@date-io/date-fns';
import {
    KeyboardDateTimePicker, MuiPickersUtilsProvider
} from '@material-ui/pickers';
import { Button, Container, Grid, TextField } from '@mui/material';
import 'date-fns';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getCarData } from '../../../Redux/Features/carFeatures/carFeature';

function CarDetails() {

    const dispatch = useDispatch()
    const { id: carId } = useParams()
    console.log(carId, 'car id from params')
    const [rentStartDate, setRentStartDate] = useState()
    const [rentEndDate, setRentEndDate] = useState()

    const rentStartDateHandler = (date) => {
        console.log(date);
        setRentStartDate(date);
    }
    const rentEndDateHandler = (date) => {
        console.log(date)
        setRentEndDate(date)
    }

    const sumbitHandler = (e) => {
        e.preventDefault()
        console.log(rentStartDate)
        console.log(rentEndDate)
    }

    const { carData: car } = useSelector((state) => {
        return state['car']
    })

    console.log(car)

    useEffect(() => {
        dispatch(getCarData(carId))
    }, [])

    return (
        <Container style={{ marginTop: '5em' }}>
            <Grid container direction='column' marginY={5} spacing={3} sm={12}>
                <Grid item sm={12} container spacing={2} direction='row'>
                    <img src={car.image1} alt="" style={{ width: '100%', height: 'auto' }} />
                    <Grid item sm={6}>
                        <h2>{car.make} {car.carModel}</h2>
                        <h4>{car.carType}</h4>
                        <div style={{ display: 'flex', gap: '1em' }}>
                            <p>{car.fuel}</p>
                            <p>{car.noOfDoors} Door</p>
                        </div>
                        <div style={{ display: 'flex', gap: '1em' }}>
                            <p>{car.noOfSeats} Seater</p>
                            <p>{car.driveType}</p>
                        </div>
                    </Grid>

                    <Grid item sm={6}>
                        <form style={{ display: 'flex', gap: '0.5em', flexDirection: 'column' }} onSubmit={sumbitHandler}>
                            <h2>{car.rent}₹ /hour</h2>
                            <MuiPickersUtilsProvider utils={DateFnsUtils} >
                                <KeyboardDateTimePicker
                                    id="time-picker"
                                    label="Trip start Date & Time"
                                    format='dd/MM/yyyy'
                                    value={rentStartDate}
                                    onChange={rentStartDateHandler}
                                />
                                <KeyboardDateTimePicker
                                    id="time-picker"
                                    label="Trip End Date & Time"
                                    format='dd/MM/yyyy'
                                    value={rentEndDate}
                                    onChange={rentEndDateHandler}
                                />

                            </MuiPickersUtilsProvider>
                            <TextField label='pickup location'></TextField>
                            <Button type='submit' variant='contained' size='large'>book drive</Button>
                        </form>
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    )
}

export default CarDetails