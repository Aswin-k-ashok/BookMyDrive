import { Button, Container, Grid, Link, Paper, TextField, Typography } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';

function AdminLoginScreen() {
    const { handleSubmit, register, formState: { errors } } = useForm();
    const onSubmit = values => console.log(values);

    return (
        <Container justifyContent='center'>
            <Grid container spacing={3} className='loginGrid' justifyContent='center' marginY={3}>
                <Grid item xs={12} md={6} lg={6}>
                    <Paper elevation={2} Padding={5} >
                        <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', alignItems: "center", padding: '3em' }}>
                            <h1>Admin</h1>

                            <TextField id='outlined-basic' label="Email" variant="outlined" helperText={errors.email && errors.email.message} style={{ width: '80%', margin: "2em" }} {...register("email", {
                                required: "Required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "invalid email address",

                                }
                            })} />



                            <TextField id='outlined-basic' label="Password" variant="outlined" helperText={errors.password && errors.password.message} style={{ width: '80%', margin: "2em" }}       {...register("password", {
                                required: 'Required'
                            })} />

                            <Button type="submit" color='success' variant='outlined' style={{ margin: '2em' }}>Submit</Button>

                            <Typography variant='subtitle1'>need an account ? <Link>register now</Link></Typography>


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

export default AdminLoginScreen