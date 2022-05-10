import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { Box, Button, Container, MenuItem, Modal, TextField, Grid } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { carUpload } from '../../../Redux/Features/carFeatures/carFeature';
import CarImageUpload from './CarImageUpload';




function CarUpload() {
    const dispatch = useDispatch()

    const [open, setOpen] = useState(false)

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)



    const { carData } = useSelector((state) => {
        return state['car']
    })

    useEffect(() => {

    }, [dispatch])


    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data, "form data is here")
        dispatch(carUpload({ formData: data, carId: carData._id }))
    };
    console.log(errors);

    return (
        <>
            <Container style={{ backgroundColor: '#D5E5FC', padding: '1em', borderRadius: '8px' }}>
                <h3>Enter Car Details</h3>
                <form onSubmit={handleSubmit(onSubmit)} gap={2}>
                    <div>
                        <Grid container>
                            <Grid item md={3} sm={12}>
                                <item>



                                    <TextField id='filled-basic' helperText='car brand' style={{ margin: '1em', width: "80%" }} defaultValue={carData.make} type="text"  {...register("make", { required: true, maxLength: 100 })} />
                                </item>
                            </Grid>
                            <Grid item md={3} sm={12}>

                                <item>

                                    <TextField id='filled-basic' helperText='car model' style={{ margin: '1em', width: "80%" }} defaultValue={carData.carModel} type="text"  {...register("carModel", { required: true, maxLength: 100 })} />
                                </item>
                            </Grid>
                            <Grid item md={3} sm={12}>
                                <item>


                                    <TextField id='filled-basic' helperText='car type' style={{
                                        margin: '1em', width: "80%"
                                    }} defaultValue={carData.carType} type="text" {...register("carType")} />
                                </item>
                            </Grid>
                            <Grid item md={3} sm={12}>
                                <item>


                                    <TextField id='filled-basic' helperText='Drive type' style={{ margin: '1em', width: "80%" }} select  {...register("driveType")}>
                                        <MenuItem value="Fwd">Front Weel Drive</MenuItem>
                                        <MenuItem value="Rwd">Rear Wheel Drive</MenuItem>
                                        <MenuItem value="4wd">Four Wheel Drive</MenuItem>
                                    </TextField>
                                </item>
                            </Grid>
                            <Grid item md={3} sm={12}>
                                <item>


                                    <TextField id='filled-basic' helperText='Seating capacity' style={{ margin: '1em', width: "80%" }} select  {...register('noOfSeats')}>
                                        <MenuItem value='2'>2 seater</MenuItem>
                                        <MenuItem value='4'>4 seater</MenuItem>
                                        <MenuItem value='5'>5 seater</MenuItem>
                                        <MenuItem value='7'>7 seater</MenuItem>
                                        <MenuItem value='9'>9 seater</MenuItem>
                                    </TextField>
                                </item>
                            </Grid>
                            <Grid item md={3} sm={12}>
                                <item>


                                    <TextField id='filled-basic' helperText='Fuel' style={{ margin: '1em', width: '80%' }} defaultValue={carData.fuel} select  {...register('fuel')}>
                                        <MenuItem value='petrol'>petrol</MenuItem>
                                        <MenuItem value='diesel'>diesel</MenuItem>
                                    </TextField>
                                </item>
                            </Grid>

                            <Grid item md={3} sm={12}>
                                <item>



                                    <TextField id='filled-basic' helperText='Manufacturing Year' style={{ margin: '1em', width: "80%" }} defaultValue={carData.makeYear} type='number'  {...register("makeYear")}>select developer</TextField>
                                </item>
                            </Grid>

                            <Grid item md={3} sm={12}>
                                <item>

                                    <TextField id='filled-basic' helperText='Number of doors' style={{ margin: '1em', width: "80%" }} defaultValue={carData.noOfDoors} type='number'{...register('noOfDoors')}>number of doors</TextField>
                                </item>
                            </Grid>
                            <Grid item md={3} sm={12}>
                                <item>



                                    <TextField id='filled-basic' helperText='Vehicle color' style={{ margin: '1em', width: "80%" }} defaultValue={carData.color} type='text' {...register('color')}>vehicle color</TextField>
                                </item>

                            </Grid>
                            <Grid item md={3} sm={12}>
                                <item>


                                    <TextField id='filled-basic' helperText='Available City' style={{ margin: '1em', width: "80%" }} defaultValue={carData.city} {...register('city')}>
                                        <MenuItem value='kochi'> kochi</MenuItem>
                                    </TextField>
                                </item>
                            </Grid>
                            <Grid item md={3} sm={12}>
                                <item>


                                    <TextField id='filled-basic' helperText='Car location' style={{ margin: '1em', width: "80%" }} defaultValue={carData.location} ></TextField>
                                </item>
                            </Grid>
                            <Grid item md={3} sm={12}>
                                <item>



                                    <TextField id='filled-basic' helperText='Rent' style={{ margin: '1em', width: "80%" }} defaultValue={carData.rent} type='number' {...register('rent')}></TextField>
                                </item>

                            </Grid>
                            <Grid item md={3} sm={12}>
                                <item>


                                    <TextField id='filled-basic' helperText='Description' style={{ margin: '1em', width: "80%" }} defaultValue={carData.description} type='textarea'{...register('description')}></TextField>
                                </item>

                            </Grid>
                            <Grid item md={3} sm={12}>
                                <item>


                                    <TextField id='filled-basic' helperText='Register number' style={{ margin: '1em', width: "80%" }} defaultValue={carData.regNo} type="text"  {...register("regNo", { required: true, maxLength: 12 })} />
                                </item>
                            </Grid>
                            <Grid item sm={12} lg={12} display="flex" justifyContent="center" alignItems='center' style={{ backgroundColor: "azure", margin: "2em" }}>
                                upload car photo
                                <item>
                                    <AddPhotoAlternateIcon style={{ fontSize: '3em', color: "black" }} onClick={handleOpen} />
                                    <Modal
                                        open={open}
                                        onClose={handleClose}
                                        aria-labelledby="modal-modal-title"
                                        aria-describedby="modal-modal-description"
                                    >
                                        <CarImageUpload />
                                    </Modal>
                                </item>
                            </Grid>
                        </Grid>

                    </div>
                    <Box display='flex' justifyContent='center'>
                        <Button type="submit" className='btn-1' justifyContent="center"
                        >submit form</Button>
                    </Box>
                </form>

            </Container>
        </>
    )
}

export default CarUpload