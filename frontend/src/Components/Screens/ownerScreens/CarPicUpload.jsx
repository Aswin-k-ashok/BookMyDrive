import { PhotoCamera } from '@material-ui/icons'
import { Container, IconButton, Input } from '@mui/material'
import { getDownloadURL, listAll, ref, uploadBytes } from 'firebase/storage'
import React, { useEffect, useState } from 'react'
import { v4 } from 'uuid'
import { storage } from '../../../helpers/firebase'

function CarPicUpload() {
    const [imageUpload, setImageUpload] = useState(null)
    const [imageUrls, setImageUrls] = useState([])
    const imageListRef = ref(storage, 'images/cars')


    const uploadImage = () => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/cars/${imageUpload.name + v4()}`)
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            alert('image uploaded')
            getDownloadURL(snapshot.ref).then((url) => {
                setImageUrls((prev) => [...prev, url]);
            })
        })
    }

    useEffect(() => {
        listAll(imageListRef).then((response) => {
            response.items.forEach((item) => {
                getDownloadURL(item).then((url) => {
                    setImageUrls((prev) => [...prev, url])
                })
            })
        })
    }, [])

    return (
        <Container style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            backgroundColor: "mintcream",
            border: '1px solid #000',
            borderRadius: "20px",
            padding: "6em",
            boxShadow: 24,
            display: 'flex',
            flexDirection: "column",
            alignItems: "center",
            gap: "2em",
            p: 4,
        }}>


            <label>Upload your Profile picture</label>
            <label htmlFor="icon-button-file">
                <Input accept="image/*" id="icon-button-file" type="file" onChange={(event) => { setImageUpload(event.target.files[0]) }} />
                <IconButton color="primary" aria-label="upload picture" fontSize='large' component="span">
                    <PhotoCamera fontSize='large' />
                </IconButton>
            </label>

            <label htmlFor="contained-button-file">

                <Button variant="contained" component="span" onClick={uploadImage}>
                    Upload
                </Button>
            </label>

        </Container >
    )
}

export default CarPicUpload