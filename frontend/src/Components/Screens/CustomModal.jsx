import * as React from 'react';
import { useEffect } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { makeStyles } from '@mui/styles';
import { useDispatch, useSelector } from 'react-redux';
import { TrainOutlined } from '@material-ui/icons';
import { modalStateClearAction, modalSuccessAction } from '../../Redux/uiFeatures/modalFeature';

const useStyles = makeStyles({
    modalContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    }
})

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    border: 'none',
    borderRadius: '10px'
};


export default function CustomModal() {

    const dispatch = useDispatch()

    const modalPayload = useSelector((state) => {
        return state['modalData']
    })
    const { modalOpen, modalMessage, buttonOneText, buttonOneColor, buttonTwoText, buttonTwoColor } = modalPayload


    const classes = useStyles()
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(modalOpen);
    const handleClose = () => dispatch(modalStateClearAction());
    const successHandler = () => { dispatch(modalSuccessAction()) };


    useEffect(() => {
        if (successHandler) {
            dispatch(modalStateClearAction())
        }
    }, [dispatch])


    return (
        <div>
            <Button onClick={handleOpen} >Open modal</Button>
            <Modal
                open={modalOpen}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style} className={classes.modalContainer}
                >
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Alert !
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        {modalMessage}
                    </Typography>
                    <div style={{ display: 'flex', justifyContent: 'space-evenly', width: '100%', margin: '1em' }}>
                        <Button variant='contained' color={buttonOneColor} onClick={() => successHandler()}>{buttonOneText}</Button>
                        <Button variant='contained' color={buttonTwoColor} onClick={() => handleClose()}>{buttonTwoText}</Button>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}
