import { Button, Container, Grid, Paper, TextField, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { userLogin } from '../../../Redux/Features/userFeatures/userLoginFeatures'
import './userScreen.css'


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
        return state['logedInUser']
    })


    // const { user } = JSON.parse(localStorage.getItem('user'))
    // const userData = useSelector((state) => state.logedInUser)

    const { user, error, loading } = userData

    const { handleSubmit, register, formState: { errors } } = useForm();


    const onSubmit = values => {
        console.log(values)
        dispatch(userLogin(values))

    }

    useEffect(() => {
        if (user) {
            navigate('/')
        }
    }, [user])


    console.log(error)





    return (

        <div style={{ backgroundColor: '#172135' }} className={classes.loginBackGround}>
            <Container>

                <Grid container spacing={3} justifyContent='center' marginY={3} className='loginGrid'>
                    <Grid item xs={12} md={6} >
                        <Paper elevation={2} Padding={5} >
                            <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', alignItems: "center", padding: '3em' }}>
                                <h1>log-in</h1>
                                <TextField id='outlined-basic' label="Email" variant="outlined" helperText={errors.email && errors.email.message} style={{ width: '80%', margin: "2em" }} {...register("email", {
                                    required: "Required",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "invalid email address"
                                    }
                                })} />
                                <TextField id='outlined-basic' type='password' label="Password" variant="outlined" style={{ width: '80%', margin: "2em" }} helperText={errors.password && errors.password.message}      {...register("password", {
                                    required: "Required",
                                    message: "invalid password"
                                })} />
                                <Button type="submit" color='' className='btn-13' variant='' >Submit</Button>
                                <Typography variant='subtitle1'>need an account ? </Typography><Link to='/register' style={{ textDecoration: 'none', color: 'primary' }}>register now</Link>
                                {error && <p>{error}</p>}
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