import CarCrashOutlinedIcon from '@mui/icons-material/CarCrashOutlined'
import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { carDeleteActon, carStateReset, createCar, getCarData } from '../../../Redux/Features/carFeatures/carFeature'
import { userCarList } from '../../../Redux/Features/carFeatures/userCarFeature'
import { openSnackbarAction } from '../../../Redux/uiFeatures/snackbarFeature'


function MyCars() {

    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [caruploadredirect, setCaruploadredirect] = useState(false)
    const { userCar } = useSelector((state) => {
        return state['usersCars']
    })

    const { carData } = useSelector((state) => {
        return state['car']
    })
    const newCarId = carData.id

    const deletehandler = (id) => {
        if (window.confirm('you sure wnat to delete this car ?')) {
            dispatch(carDeleteActon(id))
            dispatch(openSnackbarAction({ severity: 'info', snackmessage: 'car deleted successfully' }))
            dispatch(userCarList())
            dispatch(userCarList())
        }
    }

    const updateHandler = (id) => {
        dispatch(getCarData(id)).then(
            navigate(navigate(`/carupload/${id}`))
        )

    }

    useEffect(() => {

    }, [deletehandler, dispatch, userCarList, openSnackbarAction])



    useEffect(() => {
        console.log(carData)
        dispatch(userCarList())
        if (caruploadredirect) {
            navigate(`/carupload/${newCarId}`)
        }
    }, [dispatch, caruploadredirect,])




    return (
        <div >
            <Button onClick={() => {
                dispatch(carStateReset()).then(
                    dispatch(createCar()),
                    setCaruploadredirect(true)
                )
            }
            }>Register New Car</Button>
            {userCar.map((car) =>
            (<div>

                <div style={{ backgroundColor: "", color: "black", listStyle: "none", display: 'flex', alignItems: "center", justifyContent: "space-evenly", gap: '2em' }}>
                    <div style={{ display: 'flex', justifyContent: "start", minWidth: "12em" }}>
                        <p>

                            {car.make} {car.carModel}
                        </p>

                    </div>
                    <div style={{ display: 'flex', justifyContent: "start", minWidth: "12em" }}><p>

                        {car.city}
                    </p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: "start", minWidth: "12em" }} onClick={() => navigate(`/carDetails/${car._id}`)}><p>

                        <Button contained>view car details</Button>
                    </p>

                    </div>
                    <div style={{ display: 'flex', justifyContent: "start", minWidth: "12em" }} onClick={() => updateHandler(car._id)}><p>

                        <Button>update car details</Button>
                    </p>
                    </div>
                    <div onClick={() => deletehandler(car._id)}>
                        <p>
                            <CarCrashOutlinedIcon />
                        </p>

                    </div>
                </div>
            </div>
            ))}
        </div>
    )
}

export default MyCars