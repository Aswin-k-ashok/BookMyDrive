import { Button } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
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

    console.log(userCar)

    return (
        <div >
            <Button>Register New Car</Button>
            {userCar.map((car) =>
            (<div>

                <ul style={{ backgroundColor: "", color: "black", listStyle: "none", display: 'flex', alignItems: "center", justifyContent: "space-between" }}>
                    <li>{car.make} {car.carModel}</li>
                    <li>{car.city}</li>
                    <li><Button contained>view car details</Button></li>
                    <li><Button>update car details</Button></li>
                </ul>
            </div>
            ))}
        </div>
    )
}

export default MyCars