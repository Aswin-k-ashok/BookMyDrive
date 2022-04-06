import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Grid, TextField, Paper, Button, Typography, Container } from '@mui/material'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { userLogin } from '../../../Redux/Features/userFeatures/userLoginFeatures'
import './userScreen.css'
import { useEffect } from 'react'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
    loginBackGround: {
        height: '100vh',
        display: 'flex',
        alignItems: 'center'
    }
})

function LoginScreen() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const classes = useStyles()
    const location = useLocation()

    let userData = useSelector((state) => {
        return state['login']
    })

    let { loading, user, error } = userData

    const isAuth = localStorage.hasOwnProperty('user')

    console.log(isAuth)

    console.log(user)

    const { handleSubmit, register, formState: { errors } } = useForm();

    const redirect = location.search ? location.search.split('=')[1] : '/'

    const onSubmit = values => {

        dispatch(userLogin(values))
    }

    useEffect(() => {
        if (isAuth) {
            navigate('/')
        }
    }, [navigate, user, redirect])






    return (

        <div style={{ backgroundColor: '#172135' }} className={classes.loginBackGround}>
            <Container>

                <Grid container spacing={3} justifyContent='center' marginY={3} className='loginGrid'>
                    <Grid item xs={12} md={6} >
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


                                <TextField id='outlined-basic' type='password' label="Password" variant="outlined" style={{ width: '80%', margin: "2em" }}       {...register("password", {
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

            </Container>
        </div>
    )
}

export default LoginScreen