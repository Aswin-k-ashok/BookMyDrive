import CarCrashOutlinedIcon from '@mui/icons-material/CarCrashOutlined'
import { Button, Grid } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { carDeleteActon, carStateReset, createCar, getCarData } from '../../../Redux/Features/carFeatures/carFeature'
import { userCarList } from '../../../Redux/Features/carFeatures/userCarFeature'
import { openSnackbarAction } from '../../../Redux/uiFeatures/snackbarFeature'
import { makeStyles } from '@mui/styles'
import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import { openModalAction, modalStateClearAction } from '../../../Redux/uiFeatures/modalFeature'

const useStyles = makeStyles({
    glass: {
        gap: '1em',
        color: 'black',
        background: 'rgba( 255, 255, 255, 0.25 )',
        boxShadow: '0 8px 32px 0 rgba( 31, 38, 135, 0.37 )',
        backdropFilter: 'blur( 0px )',
        borderRadius: '10px',
        border: '1px solid rgba( 255, 255, 255, 0.18 )',
        padding: '1em'

    },
    fCenter: {
        display: 'flex',
        justifyContent: 'start',
        marginBottom: "1em",
        width: '100%'
    }
})




function MyCars() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const classes = useStyles()
    const [caruploadredirect, setCaruploadredirect] = useState(false)
    const [id, setId] = useState()
    const { userCar } = useSelector((state) => {
        return state['usersCars']
    })

    const { modalSuccess } = useSelector((state) => state['modalData'])

    const { carData } = useSelector((state) => {
        return state['car']
    })
    const newCarId = carData.id

    const deletehandler = (id) => {
        setId(id)
        dispatch(openModalAction({ message: 'are you sure to delete this car', textOne: 'YES', textTwo: 'NO', colorOne: 'error', colorTwo: 'info' }))
    }

    const updateHandler = (id) => {
        dispatch(getCarData(id)).then(
            navigate(navigate(`/carupload/${id}`))
        )

    }

    useEffect(() => {

    }, [deletehandler, dispatch, userCarList, openSnackbarAction])

    useEffect(() => {

        if (modalSuccess) {
            dispatch(carDeleteActon(id))
            dispatch(openSnackbarAction({ severity: 'info', snackmessage: 'car deleted successfully' }))
            dispatch(userCarList())
            dispatch(userCarList())
            dispatch(modalStateClearAction())
        }


    }, [modalSuccess, userCarList, dispatch])



    useEffect(() => {
        console.log(carData)
        dispatch(userCarList())
        if (caruploadredirect) {
            navigate(`/carupload/${newCarId}`)
        }
    }, [dispatch, caruploadredirect,])




    return (
        <div className={classes.glass}>
            <h3>Car Manangement</h3>
            <div className={classes.fCenter}>
                <Button onClick={() => {
                    dispatch(carStateReset()).then(
                        dispatch(createCar()),
                        setCaruploadredirect(true)
                    )
                }
                } variant="contained" color='info' style={{}}>Add New Car<DirectionsCarIcon /><span style={{ fontWeight: "800" }}>+</span></Button>
            </div>
            {userCar.map((car) =>
            (<>
                <Grid>

                    <div style={{ backgroundColor: "", color: "black", listStyle: "none", display: 'flex', alignItems: "center", justifyContent: "space-evenly", gap: '2em' }}>
                        <Grid item lg={2}>
                            <item style={{ display: 'flex', justifyContent: "start", }}>
                                <p>

                                    {car.make} {car.carModel}
                                </p>

                            </item>
                        </Grid>
                        <Grid item lg={2}>

                            <item style={{ display: 'flex', justifyContent: "start", }}>
                                <p>

                                    {car.city}
                                </p>
                            </item>
                        </Grid>

                        <Grid item lg={2}>

                            <item style={{ display: 'flex', justifyContent: "start", }} onClick={() => navigate(`/carDetails/${car._id}`)}><p>

                                <Button contained color='success' variant='contained'>view car details</Button>
                            </p>

                            </item>
                        </Grid>

                        <Grid item lg={2}>

                            <item style={{ display: 'flex', justifyContent: "start", }} onClick={() => updateHandler(car._id)}><p>

                                <Button color='warning' variant='outlined'>update car details</Button>
                            </p>
                            </item>
                        </Grid>
                        <Grid item lg={2}>

                            <item onClick={() => deletehandler(car._id)}>
                                <Button color='error' variant='contained'>
                                    delete <CarCrashOutlinedIcon /> <span style={{ fontWeight: "800" }}> x </span>
                                </Button>

                            </item>
                        </Grid>
                    </div>
                </Grid>
            </>
            ))}
        </div>
    )
}

export default MyCars