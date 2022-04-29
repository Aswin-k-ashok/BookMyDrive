import { PhotoCamera } from '@material-ui/icons'
import { Button, Container, IconButton } from '@mui/material'
import { styled } from '@mui/styles'
import { getDownloadURL, listAll, ref, uploadBytes } from 'firebase/storage'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { v4 } from 'uuid'
import { storage } from '../../../helpers/firebase'
import { userProfilePicUpdate } from '../../../Redux/Features/userFeatures/userLoginFeatures'
const Input = styled('input')({
    display: 'none'
})


function DpUpload() {

    const dispatch = useDispatch()

    const [imageUpload, setImageUpload] = useState(null)
    const [imageUrls, setImageUrls] = useState([])
    const imageListRef = ref(storage, 'images/dp')



    const uploadImage = () => {
        if (imageUpload == null) return;
        const imageRef = ref(storage, `images/dp/${imageUpload.name + v4()}`)
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
            alert('image uploaded')
            getDownloadURL(snapshot.ref).then((url) => {
                console.log(url);
                dispatch(userProfilePicUpdate(url))
                setImageUrls((prev) => [...prev, url]);
                // console.log(imageUrls)
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
        <Container>


            <label htmlFor="icon-button-file">
                <Input accept="image/*" id="icon-button-file" type="file" onChange={(event) => { setImageUpload(event.target.files[0]) }} />
                <IconButton color="primary" aria-label="upload picture" component="span"
                >
                    <PhotoCamera />
                </IconButton>
            </label>

            <label htmlFor="contained-button-file">

                <Button variant="contained" component="span" onClick={uploadImage}>
                    Upload
                </Button>
            </label>

        </Container>
    )
}

export default DpUpload