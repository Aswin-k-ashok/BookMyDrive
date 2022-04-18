import { Card, Grid } from '@mui/material'
import { borderRadius } from '@mui/system'
import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from 'styled-components'
import getCarData from '../helpers/cardata'
import Loader from './Loader'
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

const CardStyle = styled.div`
border-radius:8px;
padding:2em;
background: rgba( 21, 20, 20, 0.2 );
box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
backdrop-filter: blur( 0.5px );
-webkit-backdrop-filter: blur( 0.5px );
border-radius: 10px;
border: 1px solid rgba( 255, 255, 255, 0.18 );

:before {
    height: 0%;
    width: 2px;
  }
:hover {
    background: rgba( 21, 20, 20, 0.8 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 0.5px );
    -webkit-backdrop-filter: blur( 0.5px );
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
  }
`

function ProfileCard() {

    const userData = useSelector((state) => {
        return state['login']
    })

    let { loading, user, error } = userData

    const params = { make: 'Volvo' }

    return (
        <div>
            <Grid container style={{ color: 'black' }}>
                <Grid item sm={12}>
                    <Grid container>
                        <Grid item md={8}>

                            <ul style={{ listStyle: 'none' }}>
                                <li>
                                    <h3>{user.firstName} {user.lastName}</h3>
                                </li>
                                <li>
                                    <p>{user.email}</p>
                                </li>
                                <li>
                                    <p>{user.phone}</p>
                                </li>
                                <li>
                                    <p>{user.address}</p>
                                </li>
                                {/* <li>
                                    <button onClick={() => getCarData(params)}>car data</button>
                                </li>
                                <li>
                                    <Loader />
                                </li> */}
                            </ul>
                        </Grid>
                        <Grid item md={4}>


                            <img src='' />
                            <AddPhotoAlternateIcon style={{ fontSize: '8em' }} />
                        </Grid>
                    </Grid>

                </Grid>
                <Grid item sm={12}>
                    <Grid container spacing={2}>
                        <Grid item md={6} sm={12}> <CardStyle >money spend
                            <h1>25000 rs</h1></CardStyle></Grid>
                        <Grid item md={6} sm={12}> <CardStyle >cars rented
                            <h1>15</h1></CardStyle></Grid>
                        <Grid item md={6} sm={12}> <CardStyle >community points
                            <h1>350</h1></CardStyle></Grid>
                        <Grid item md={6} sm={12}> <CardStyle >owners connected
                            <h1>33</h1></CardStyle></Grid>
                    </Grid>
                </Grid>
            </Grid>
        </div>
    )
}

export default ProfileCard