import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { Modal } from '@mui/material';
import { makeStyles } from '@mui/styles';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userUpdate } from '../../../Redux/Features/userFeatures/userLoginFeatures';
import DpUpload from './DpUpload';


const styles = makeStyles({
    formStyle: {
        display: 'flex',
        flexDirection: "column",
        alignItems: 'center',
    },

    formStyleInput: {
        margin: '1.5em',
        padding: '1em',
        width: '80%',
        borderRadius: '8px',
        border: 'none',
    }
})


function ProfileUpdate() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const classes = styles()

    const [open, setOpen] = useState(false)

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    let userData = useSelector((state) => {
        return state['logedInUser']
    })

    let { loading, user, error } = userData

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = data => {

        dispatch(userUpdate(data))

    }

    useEffect(() => {
        console.log('hello');
    }, [dispatch])


    // const onSubmit = data => console.log(data);


    console.log(errors);
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className={classes.formStyle}>
                <AddPhotoAlternateIcon style={{ fontSize: '8em', color: "black" }} onClick={handleOpen} />
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                >
                    <DpUpload />
                </Modal>
                <input type="text" defaultValue={user.firstName} {...register(user.firstName, { required: true, maxLength: 80 })} className={classes.formStyleInput} />
                <input type="text" defaultValue={user.lastName} {...register("lastName", { required: true, maxLength: 100 })} className={classes.formStyleInput} />
                <input type="text" defaultValue={user.email} {...register("email", { required: true, pattern: /^\S+@\S+$/i })} className={classes.formStyleInput} />
                <input type="tel" defaultValue={user.phone} {...register("phone", { required: true, min: 3, maxLength: 12 })} className={classes.formStyleInput} />
                <input type="password" placeholder="type in password to confirm changes" {...register("password", { required: true, min: 6 })} className={classes.formStyleInput} />
                <input type="submit" className='btn-4' style={{ width: '20%' }} />

            </form>
        </div>
    )
}

export default ProfileUpdate