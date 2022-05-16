import CloseIcon from '@mui/icons-material/Close';
import MuiAlert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import Snackbar from '@mui/material/Snackbar';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { closeSnackbarAction } from '../Redux/uiFeatures/snackbarFeature';

function CustomSnackbar() {

    //const [open, setOpen] = React.useState(false);
    const dispatch = useDispatch()
    const snackState = useSelector((state) => {
        return state['snackbarData']
    })

    const Alert = React.forwardRef(function Alert(props, ref) {
        return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
    });

    const { snackbarOpen, snackBarType, snackbarMessage } = snackState



    // const handleClick = () => {
    //     dispatch(openSnackbarAction())
    // };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        dispatch(closeSnackbarAction())
    };

    const action = (
        <React.Fragment>
            <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleClose}
            >
                <CloseIcon fontSize="small" />
            </IconButton>
        </React.Fragment>
    );



    return (
        <div>
            <Snackbar
                open={snackbarOpen}
                autoHideDuration={3000}
                onClose={handleClose}
                action={action}

            >

                <Alert severity={snackBarType}>{snackbarMessage}</Alert>


            </Snackbar>
        </div>
    )
}

export default CustomSnackbar