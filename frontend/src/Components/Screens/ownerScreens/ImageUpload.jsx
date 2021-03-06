import { getDownloadURL, listAll, ref, uploadBytes } from 'firebase/storage'
import { React, useEffect, useState } from 'react'
import { v4 } from 'uuid'
import { storage } from '../../../helpers/firebase'


function ImageUpload() {
    const [imageUpload, setImageUpload] = useState(null)
    const [imageUrls, setImageUrls] = useState([])
    const imageListRef = ref(storage, 'images/')


    const uploadImage = () => {
        if (imageUpload == null)
            console.log('add an image to upload')
        return;
        const imageRef = ref(storage, `images/${imageUpload.name + v4()}`)
        uploadBytes(imageRef, imageUpload).then((snapshot) => {
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
        <div style={{ marginTop: '5em' }}>
            <input type='file' onChange={(event) => { setImageUpload(event.target.files[0]) }} />
            <button onClick={uploadImage}>upload image</button>
            {imageUrls.map((url) => {
                return <img src={url} />
            })}
        </div>
    )
}

export default ImageUpload