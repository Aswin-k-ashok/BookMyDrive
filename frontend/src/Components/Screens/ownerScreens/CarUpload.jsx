import { Box, Button, MenuItem, TextField } from '@mui/material';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { carUploadAction } from '../../../Redux/Features/carFeatures/carFeature';




function CarUpload() {

    const dispatch = useDispatch()

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data, "form data is here")
        dispatch(carUploadAction(data))
    };
    console.log(errors);

    // const [imageUpload, setImageUpload] = useState(null)
    // const [imageUrls, setImageUrls] = useState('')
    // const imageListRef = ref(storage, 'images/car/')
    // const uploadImage = () => {
    //     if (imageUpload == null) return;
    //     const imageRef = ref(storage, `images/car/${imageUpload.name + v4()}`)

    //     uploadBytes(imageRef, imageUpload).then((snapshot => {
    //         getDownloadURL(snapshot.ref).then((url) => {
    //             setImageUrls(url)
    //         })
    //     }))
    // }

    // useEffect(() => {
    //     listAll(imageListRef).then((response) => {
    //         response.items.forEach((item) => {
    //             getDownloadURL(item).then((url) => {
    //                 setImageUrls(url)
    //             })
    //         })
    //     })
    // }, [])

    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} gap={2}>
                <div>

                    <TextField id='filled-basic' helperText='enter details' style={{ margin: '1em' }} label='brand' type="text"  {...register("make", { required: true, maxLength: 100 })} />

                    <TextField id='filled-basic' helperText='enter details' style={{ margin: '1em' }} label='model' type="text"  {...register("carModel", { required: true, maxLength: 100 })} />

                    <TextField id='filled-basic' helperText='enter details' style={{
                        margin: '1em'
                    }} label='car type' type="text" {...register("carType")} />

                    <TextField id='filled-basic' helperText='enter details' style={{ margin: '1em' }} label='car type' select  {...register("driveType")}>
                        <MenuItem value="Fwd">Front Weel Drive</MenuItem>
                        <MenuItem value="Rwd">Rear Wheel Drive</MenuItem>
                        <MenuItem value="4wd">Four Wheel Drive</MenuItem>
                    </TextField>

                    <TextField id='filled-basic' helperText='enter details' style={{ margin: '1em' }} label='seating' select  {...register('noOfSeats')}>
                        <MenuItem value='2'>2 seater</MenuItem>
                        <MenuItem value='4'>4 seater</MenuItem>
                        <MenuItem value='5'>5 seater</MenuItem>
                        <MenuItem value='7'>7 seater</MenuItem>
                        <MenuItem value='9'>9 seater</MenuItem>
                    </TextField>

                    <TextField id='filled-basic' helperText='enter details' style={{ margin: '1em' }} label='fuel type' select  {...register('fuel')}>
                        <MenuItem value='petrol'>petrol</MenuItem>
                        <MenuItem value='diesel'>diesel</MenuItem>
                    </TextField>

                    <TextField id='filled-basic' helperText='enter details' style={{ margin: '1em' }} label='make year' type='number'  {...register("makeYear")}>select developer</TextField>

                    <TextField id='filled-basic' helperText='enter details' style={{ margin: '1em' }} label='No of doors' type='number'{...register('noOfDoors')}>number of doors</TextField>

                    <TextField id='filled-basic' helperText='enter details' style={{ margin: '1em' }} label='color' type='text' {...register('color')}>vehicle color</TextField>

                    <TextField id='filled-basic' helperText='enter details' style={{ margin: '1em' }} label='city'{...register('city')}>
                        <MenuItem value='kochi'> kochi</MenuItem>
                    </TextField>

                    <TextField id='filled-basic' helperText='enter details' style={{ margin: '1em' }} label='location' ></TextField>

                    <TextField id='filled-basic' helperText='enter details' style={{ margin: '1em' }} label='rent/day' type='number' {...register('rent')}></TextField>

                    <TextField id='filled-basic' helperText='enter details' style={{ margin: '1em' }} label='description' type='textarea'{...register('description')}></TextField>

                    <TextField id='filled-basic' helperText='enter details' style={{ margin: '1em' }} label='Reg no' type="text"  {...register("regNo", { required: true, maxLength: 12 })} />


                    {/* <TextField type='file' onChange={(event) => {
                        console.log(event, "printing event")
                        setImageUpload(event.target.file)
                    }} />
                    <button onClick={uploadImage}>upload image</button> */}
                    {/* {imageUrls ? <img src={imageUrls} style={{ width: '100%', height: 'auto' }} /> : null} */}

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