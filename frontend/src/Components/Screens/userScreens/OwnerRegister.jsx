import { Button, TextField } from '@mui/material'
import { makeStyles } from '@mui/styles'
import { Box } from '@mui/system'
import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const useStyles = makeStyles({
    flexForm: {
        display: 'flex',
        flexDirection: 'column',
        gap: '1em',
        color: 'black',
        background: 'rgba( 255, 255, 255, 0.25 )',
        boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
        backdropFilter: 'blur( 0px )',
        borderRadius: '10px',
        border: '1px solid rgba( 255, 255, 255, 0.18 )',
        padding: '1em'

    }
})


function OwnerRegister() {

    const [idcard, setIdcard] = useState('')
    const [registerNumber, setRegisterNumber] = useState('')

    const navigate = useNavigate()
    const classes = useStyles()

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(idcard, registerNumber)
    }

    return (
        <div>

            <Box className={classes.flexForm}>
                <h4>Become our partner</h4>
                <p>Register With your id(voters/DrivingLicence)</p>
                <form className={classes.flexForm} onSubmit={submitHandler}>
                    <TextField type='text' placeholder='Identificaton' value={idcard} onChange={(e) => { setIdcard(e.target.value) }} />
                    <TextField type='text' placeholder='Register number of your car' value={registerNumber} onChange={(e) => { setRegisterNumber(e.target.value) }} />
                    <Button variant='contained' type='submit'>Send Request for approval</Button>
                    {/* <Button variant='contained' onClick={() => navigate('/ownerDash')} >proceed to payment</Button> */}
                </form>
            </Box>

        </div>
    )
}

export default OwnerRegister