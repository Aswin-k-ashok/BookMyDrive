import React from 'react'
import { Grid, TextField, Paper, Button } from '@mui/material'
import { useForm } from 'react-hook-form'

function LoginScreen() {
    const { handleSubmit, register, formState: { errors } } = useForm();
    const onSubmit = values => console.log(values);
    return (
        <div>
            <Grid container spacing={3}>
                <Grid item xs={7}>
                    <Paper elevation={2} Padding={5} >
                        <form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column' }}>

                            <TextField id='outlined-basic' label="Email" variant="outlined" {...register("email", {
                                required: "Required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "invalid email address"
                                }
                            })} />

                            {errors.email && errors.email.message}

                            <TextField id='outlined-basic' label="Password" variant="outlined"         {...register("password", {
                                validate: value => value !== "admin" || "Nice try!"
                            })} />
                            {errors.password && errors.password.message}
                            <Button type="submit">Submit</Button>

                        </form>
                    </Paper>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={5}>

                </Grid>
            </Grid>
        </div>
    )
}

export default LoginScreen