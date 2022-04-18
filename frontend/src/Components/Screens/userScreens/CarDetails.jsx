import React, { useState } from 'react'
import { Container, Grid, TextField, Button } from '@mui/material'
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
    KeyboardDateTimePicker
} from '@material-ui/pickers';
import 'date-fns';
import DateFnsUtils from '@date-io/date-fns';

function CarDetails() {


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

    return (
        <Container style={{ marginTop: '5em' }}>
            <Grid container direction='column' marginY={5} spacing={3} sm={12}>
                <Grid item sm={12} container spacing={2} direction='row'>
                    <img src="https://firebasestorage.googleapis.com/v0/b/bmdimageupload.appspot.com/o/images%2Fcar%2Fjetta.jpg43cb366b-8450-44bd-afcb-4ccbd53480ab?alt=media&token=ac62fdd0-e79f-44dc-9bf4-0fbd566fd0b9" alt="" style={{ width: '100%', height: 'auto' }} />
                    <Grid item sm={6}>
                        <h2>carname</h2>
                        <h4>car type</h4>
                        <div style={{ display: 'flex', gap: '1em' }}>
                            <p>fuel</p>
                            <p>door</p>
                        </div>
                        <div style={{ display: 'flex', gap: '1em' }}>
                            <p>seat</p>
                            <p>drive type</p>
                        </div>
                    </Grid>

                    <Grid item sm={6}>
                        <form style={{ display: 'flex', gap: '0.5em', flexDirection: 'column' }} onSubmit={sumbitHandler}>
                            <h2>rent Per day</h2>
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