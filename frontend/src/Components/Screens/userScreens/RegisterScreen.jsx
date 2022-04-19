import { Button, Container, Grid, Paper, TextField, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import { userRegister } from '../../../Redux/Features/userFeatures/userRegisterFeature'
import './userScreen.css'

const ResponsiveTextInput = styled.div`

display:flex;
justify-content:space-around;

@media (max-width: 768px) {
  flex-direction: column;

}


`

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
    <Container style={{ marginTop: '2em' }}>
      <Grid container spacing={3} className='loginGrid' marginY={3} justifyContent='center'>
        <Grid item xs={12} md={12}>
          <Paper elevation={2} Padding={5} margin={3}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'space-between',
                padding: '1em',
              }}
            >
              <h1>Sign up</h1>
              <ResponsiveTextInput>

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
                  label='Last Name'
                  variant='outlined'
                  style={{ width: '80%', margin: '2em' }}
                  {...register('lastName', {
                    required: 'Required',
                    message: 'last name is mandatory',
                  })}
                />
              </ResponsiveTextInput>

              <ResponsiveTextInput>

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

              </ResponsiveTextInput>

              <ResponsiveTextInput>

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
              </ResponsiveTextInput>

              <ResponsiveTextInput>

                <Button
                  type='submit'
                  color='success'
                  variant='outlined'
                  style={{ width: '40%', margin: '2em' }}
                  alignItems='center'
                >
                  Sign Up
                </Button>
              </ResponsiveTextInput>

              <ResponsiveTextInput>
                <Typography variant='subtitle1'>
                  already a member ? <Link to='/login' style={{ textDecoration: 'none' }}>login</Link>
                </Typography>
              </ResponsiveTextInput>
              <ResponsiveTextInput>

                <p style={{ color: 'red' }}>
                  {errors.password && errors.password.message}
                  {errors.email && errors.email.message}
                  {errors.phone && errors.phone.message}
                </p>
              </ResponsiveTextInput>
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
