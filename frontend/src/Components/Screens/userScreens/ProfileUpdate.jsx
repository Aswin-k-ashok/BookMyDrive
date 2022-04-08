import React from 'react'
import { makeStyles } from '@mui/styles';
import { useForm } from 'react-hook-form';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';


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

    const classes = styles()
    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    console.log(errors);
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)} className={classes.formStyle}>
                <AddPhotoAlternateIcon style={{ fontSize: '8em' }} />

                <input type="text" placeholder="First name" {...register("firstName", { required: true, maxLength: 80 })} className={classes.formStyleInput} />
                <input type="text" placeholder="Last name" {...register("lastName", { required: true, maxLength: 100 })} className={classes.formStyleInput} />
                <input type="text" placeholder="Email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} className={classes.formStyleInput} />
                <input type="tel" placeholder="Mobile number" {...register("phone", { required: true, min: 3, maxLength: 12 })} className={classes.formStyleInput} />
                <input type="password" placeholder="type in password to confirm changes" {...register("password", { required: true, min: 6 })} className={classes.formStyleInput} />
                <input type="submit" className='btn-4' style={{ width: '20%' }} />

            </form>
        </div>
    )
}

export default ProfileUpdate