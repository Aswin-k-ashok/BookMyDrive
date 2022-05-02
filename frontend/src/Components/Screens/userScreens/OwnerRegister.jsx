import { Button, TextField } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Box } from '@mui/system'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const useStyles = makeStyles({
    flexForm: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1em',
        color: 'black'
    }
})


function OwnerRegister() {

    const navigate = useNavigate()

    const classes = useStyles()

    return (
        <div>

            <Box className={classes.flexForm}>
                <h4> become our partner</h4>
                <p>register car, and pay a refundable amount of 5000 rs to complete your registration</p>
                <form className={classes.flexForm}>
                    <TextField type='text' placeholder='Identificaton' />
                    <TextField type='text' placeholder='rc-book number of your car' />
                    <Button variant='contained'>upload detals of your card</Button>
                    <Button variant='contained' onClick={() => navigate('/ownerDash')} >proceed to payment</Button>
                </form>
            </Box>

        </div>
    )
}

export default OwnerRegister