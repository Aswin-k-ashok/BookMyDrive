import React from 'react'
import { useEffect } from 'react'
import { Grid, TextField, Paper, Button, Typography, Container } from '@mui/material'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { userRegister } from '../../../Redux/Features/userFeatures/userRegisterFeature'
import './userScreen.css'

function RegisterScreen() {

  const dispatch = useDispatch()
  const navigate = useNavigate()


  const { handleSubmit, register, formState: { errors }, } = useForm()


  const onSubmit = (values) => {
    console.log(values)
    dispatch(userRegister(values))
    navigate('/login')
  }

  useEffect(() => {

  }, [dispatch])






  return (
    <Container>
      <Grid container spacing={3} className='loginGrid' marginY={3}>
        <Grid item xs={12} md={6}>
          <Paper elevation={2} Padding={5} margin={3}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: '3em',
              }}
            >
              <h1>Sign up</h1>
              <TextField
                id='outlined-basic'
                label='First Name'
                variant='outlined'
                style={{ width: '80%', margin: '2em' }}
                {...register('firstName', {
                  required: 'Required',
                  message: 'first name is mandatory',
                })}
              />

              <TextField
                id='outlined-basic'
                label='First Name'
                variant='outlined'
                style={{ width: '80%', margin: '2em' }}
                {...register('lastName', {
                  required: 'Required',
                  message: 'last name is mandatory',
                })}
              />
              <TextField
                id='outlined-basic'
                type='number'
                label='Phone'
                variant='outlined'
                style={{ width: '80%', margin: '2em' }}
                {...register('phone', {
                  required: 'Required',
                  minLength: 10,
                  message: 'enter a valid phone number',

                })}
              />

              <TextField
                id='outlined-basic'
                label='Email'
                variant='outlined'
                style={{ width: '80%', margin: '2em' }}
                {...register('email', {
                  required: 'Required',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'invalid email address',
                  },
                })}
              />

              <TextField
                id='outlined-basic'
                label='Password'
                variant='outlined'
                type='password'
                style={{ width: '80%', margin: '2em' }}
                {...register('password', {
                  validate: (value) => value !== 'admin' || 'Nice try!',
                })}
              />
              <TextField
                id='outlined-basic'
                label='Confirm Password'
                variant='outlined'
                type='password'
                style={{ width: '80%', margin: '2em' }}
                {...register('password', {
                  validate: (value) => value !== 'admin' || 'Nice try!',
                })}
              />
              <Button
                type='submit'
                color='success'
                variant='outlined'
                style={{ margin: '2em' }}
              >
                Submit
              </Button>

              <Typography variant='subtitle1'>
                already a member ? <Link to='/login' style={{ textDecoration: 'none' }}>login</Link>
              </Typography>

              <p style={{ color: 'red' }}>
                {errors.password && errors.password.message}
                {errors.email && errors.email.message}
                {errors.phone && errors.phone.message}
              </p>
            </form>
          </Paper>
        </Grid>
        {/* <Grid item xs={6}>
            <iframe src="https://embed.lottiefiles.com/animation/92808"></iframe>
        </Grid> */}
      </Grid>
    </Container>
  )
}

export default RegisterScreen
