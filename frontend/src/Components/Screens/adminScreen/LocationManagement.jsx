import { Button, TextField, Autocomplete } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { useDispatch } from 'react-redux'
import React, { useState } from 'react'
import { addNewLocation } from '../../../Redux/Features/adminFeatures/locationFeature'

const useStyles = makeStyles({
    locationFormStyle: {
        backgroundColor: "azure",
        padding: "3em",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    }
})

function LocationManagement() {

    const dispatch = useDispatch()

    const [state, setState] = useState('')  // setting indias states instead of ract state laugh 😅
    const [city, setCity] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(state, city)
        const values = { state: state, city: city }
        dispatch(addNewLocation(values))


    }

    const classes = useStyles()
    return (
        <>
            <h3>Location management</h3>
            <form className={classes.locationFormStyle} onSubmit={submitHandler}>

                {/* <Autocomplete
                    disablePortal
                    id="combo-box-demo"
                    options={states}
                    value={state}
                    sx={{ width: 300 }}
                    renderInput={(params) => <TextField {...params} label="states value={params}
                    " onChange={(e) => setState(e.target.value)} />}

                /> */}
                <TextField id='filled-basic' helperText='select  state' value={state}
                ></TextField>

                <TextField id='filled-basic' helperText='select city' value={city} onChange={(e) => setCity(e.target.value)} ></TextField>

                <Button type='submit'>submit</Button>
            </form>
            <ul>
                <li>
                    <p>owieg</p>
                </li>
                <li>
                    <p>owieg</p>
                </li>
                <li>
                    <p>owieg</p>
                </li>
            </ul>
        </>
    )
}


const states = [
    { label: 'Andhra Pradesh	' },
    { label: 'Delhi' },
    { label: 'Karnataka' },
    { label: 'Kerala' },
    { label: 'Maharashtra' },
    { label: 'Tamil Nadu	' },
    { label: 'Punjab' },


]

export default LocationManagement