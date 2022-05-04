import { Button } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { carUpload } from '../../../Redux/Features/carFeatures/carFeature'
import { userCarList } from '../../../Redux/Features/carFeatures/userCarFeature'
function MyCars() {

    const dispatch = useDispatch()
    const { userCar } = useSelector((state) => {
        return state['usersCars']
    })

    const { carData } = useSelector((state) => {
        return state['car']
    })



    useEffect(() => {
        dispatch(userCarList())
    }, [])


    return (
        <div >
            <Button onClick={() => dispatch(carUpload())}>Register New Car</Button>
            {userCar.map((car) =>
            (<div>

                <div style={{ backgroundColor: "", color: "black", listStyle: "none", display: 'flex', alignItems: "center", justifyContent: "space-evenly", gap: '2em' }}>
                    <div style={{ display: 'flex', justifyContent: "start", minWidth: "12em" }}>
                        <p>

                            {car.make} {car.carModel}
                        </p>

                    </div>
                    <div style={{ display: 'flex', justifyContent: "start", minWidth: "12em" }}>                        <p>

                        {car.city}
                    </p>
                    </div>
                    <div style={{ display: 'flex', justifyContent: "start", minWidth: "12em" }}>                        <p>

                        <Button contained>view car details</Button>
                    </p>

                    </div>
                    <div style={{ display: 'flex', justifyContent: "start", minWidth: "12em" }}>                        <p>

                        <Button>update car details</Button>
                    </p>
                    </div>
                </div>
            </div>
            ))}
        </div>
    )
}

export default MyCars