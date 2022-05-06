import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { Box, Button, MenuItem, Modal, TextField } from '@mui/material';
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
        <div>
            <form onSubmit={handleSubmit(onSubmit)} gap={2}>
                <div>

                    <TextField id='filled-basic' helperText='car brand' style={{ margin: '1em' }} defaultValue={carData.make} type="text"  {...register("make", { required: true, maxLength: 100 })} />

                    <TextField id='filled-basic' helperText='car model' style={{ margin: '1em' }} defaultValue={carData.carModel} type="text"  {...register("carModel", { required: true, maxLength: 100 })} />

                    <TextField id='filled-basic' helperText='car type' style={{
                        margin: '1em'
                    }} defaultValue={carData.carType} type="text" {...register("carType")} />

                    <TextField id='filled-basic' helperText='Drive type' style={{ margin: '1em' }} defaultValue='Drive type' select  {...register("driveType")}>
                        <MenuItem value="Fwd">Front Weel Drive</MenuItem>
                        <MenuItem value="Rwd">Rear Wheel Drive</MenuItem>
                        <MenuItem value="4wd">Four Wheel Drive</MenuItem>
                    </TextField>

                    <TextField id='filled-basic' helperText='Seating capacity' style={{ margin: '1em' }} defaultValue='seating' select  {...register('noOfSeats')}>
                        <MenuItem value='2'>2 seater</MenuItem>
                        <MenuItem value='4'>4 seater</MenuItem>
                        <MenuItem value='5'>5 seater</MenuItem>
                        <MenuItem value='7'>7 seater</MenuItem>
                        <MenuItem value='9'>9 seater</MenuItem>
                    </TextField>

                    <TextField id='filled-basic' helperText='Fuel' style={{ margin: '1em' }} defaultValue={carData.fuel} select  {...register('fuel')}>
                        <MenuItem value='petrol'>petrol</MenuItem>
                        <MenuItem value='diesel'>diesel</MenuItem>
                    </TextField>

                    <TextField id='filled-basic' helperText='Manufacturing Year' style={{ margin: '1em' }} defaultValue={carData.makeYear} type='number'  {...register("makeYear")}>select developer</TextField>

                    <TextField id='filled-basic' helperText='Number of doors' style={{ margin: '1em' }} defaultValue={carData.noOfDoors} type='number'{...register('noOfDoors')}>number of doors</TextField>

                    <TextField id='filled-basic' helperText='Vehicle color' style={{ margin: '1em' }} defaultValue={carData.color} type='text' {...register('color')}>vehicle color</TextField>

                    <TextField id='filled-basic' helperText='Available City' style={{ margin: '1em' }} defaultValue={carData.city} {...register('city')}>
                        <MenuItem value='kochi'> kochi</MenuItem>
                    </TextField>

                    <TextField id='filled-basic' helperText='Car location' style={{ margin: '1em' }} defaultValue={carData.location} ></TextField>

                    <TextField id='filled-basic' helperText='Rent' style={{ margin: '1em' }} defaultValue={carData.rent} type='number' {...register('rent')}></TextField>

                    <TextField id='filled-basic' helperText='Description' style={{ margin: '1em' }} defaultValue={carData.description} type='textarea'{...register('description')}></TextField>

                    <TextField id='filled-basic' helperText='Register number' style={{ margin: '1em' }} defaultValue={carData.regNo} type="text"  {...register("regNo", { required: true, maxLength: 12 })} />

                    <AddPhotoAlternateIcon style={{ fontSize: '3em', color: "black" }} onClick={handleOpen} />
                    <Modal
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="modal-modal-title"
                        aria-describedby="modal-modal-description"
                    >
                        <CarImageUpload />
                    </Modal>

                </div>
                <Box display='flex' justifyContent='center'>
                    <Button type="submit" className='btn-1' justifyContent="center"
                    >submit form</Button>
                </Box>
            </form>

        </div>
    )
}

export default CarUpload