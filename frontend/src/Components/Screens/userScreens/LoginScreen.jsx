import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Grid, TextField, Paper, Button, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { logedInUser } from '../../../Redux/Features/userFeatures'
import './userScreen.css'
import { useEffect } from 'react'
import axios from 'axios'



function LoginScreen() {


    const login = async (email, pass) => {
        const { data } = await axios.post('/api/users/login', {
            email, pass
        })

        localStorage.setItem('userInfo', JSON.stringify(data))

    }

    const { handleSubmit, register, formState: { errors } } = useForm();
    const onSubmit = values => {

        const email = values.email
        const pass = values.password
        login()
    };



    return (
        <div style={{ backgroundColor: '#172135' }}>
            <Grid container spacing={3} className='loginGrid'>
                <Grid item xs={4}>
                    <Paper elevation={2} Padding={5} >
                        <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', alignItems: "center", padding: '3em' }}>

                            <h1>log-in</h1>

                            <TextField id='outlined-basic' label="Email" variant="outlined" style={{ width: '80%', margin: "2em" }} {...register("email", {
                                required: "Required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "invalid email address"
                                }
                            })} />


                            <TextField id='outlined-basic' labe l="Password" variant="outlined" style={{ width: '80%', margin: "2em" }}       {...register("password", {
                                validate: value => value !== "admin" || "Nice try!"
                            })} />

                            <Button type="submit" color='' className='btn-13' variant='' >Submit</Button>
                            <Typography variant='subtitle1'>need an account ? </Typography><Link to='/register' style={{ textDecoration: 'none', color: 'primary' }}>register now</Link>

                            <p style={{ color: 'red' }}>
                                {errors.password && errors.password.message}
                                {errors.email && errors.email.message}
                            </p>

                        </form>
                    </Paper>
                </Grid>
                {/* <Grid item xs={6}>
                    <iframe src="https://embed.lottiefiles.com/animation/92808"></iframe>
                </Grid> */}

            </Grid>

        </div>
    )
}

export default LoginScreen