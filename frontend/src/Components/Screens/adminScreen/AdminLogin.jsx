import React from 'react'
import { Grid, TextField, Paper, Button, Typography } from '@mui/material'
import { Link } from '@mui/material'
import { useForm } from 'react-hook-form'
import './userScreen.css'

function AdminLoginScreen() {
    const { handleSubmit, register, formState: { errors } } = useForm();
    const onSubmit = values => console.log(values);
    return (
        <div>
            <Grid container spacing={3} className='loginGrid'>
                <Grid item xs={4}>
                    <Paper elevation={2} Padding={5} >
                        <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', alignItems: "center", padding: '3em' }}>
                            <h1>Admin</h1>

                            <TextField id='outlined-basic' label="Email" variant="outlined" style={{ width: '80%', margin: "2em" }} {...register("email", {
                                required: "Required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "invalid email address"
                                }
                            })} />


                            <TextField id='outlined-basic' label="Password" variant="outlined" style={{ width: '80%', margin: "2em" }}       {...register("password", {
                                validate: value => value !== "admin" || "Nice try!"
                            })} />
                            <Button type="submit" color='success' variant='outlined' style={{ margin: '2em' }}>Submit</Button>

                            <Typography variant='subtitle1'>need an account ? <Link>register now</Link></Typography>

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

export default AdminLoginScreen