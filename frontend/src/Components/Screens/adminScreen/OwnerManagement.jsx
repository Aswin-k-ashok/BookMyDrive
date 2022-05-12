import React, { useEffect } from 'react'
import { Button, Grid } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import { getAllUsers } from '../../../Redux/Features/adminFeatures/GetAllUsersFeatures'


function OwnerMangement() {

    const dispatch = useDispatch()

    const { loading, users, error } = useSelector((state) => {
        return state['allUsers']
    })

    console.log(users)

    useEffect(() => {
        dispatch(getAllUsers())
    }, [])





    return (


        <>
            owner management
            <div>
                <Grid container>
                    <Grid item lg={6}>
                        <h4>Registered Owners</h4>
                        <ul style={{ listStyle: 'none' }}>
                            <li>
                                {users.map((user) => (
                                    <p>{user.firstName}</p>
                                ))}
                            </li>
                        </ul>
                    </Grid>
                    <Grid item lg={6}>
                        <h4>New requests</h4>
                        <item style={{ width: '100%' }}>
                            <ul style={{ listStyle: 'none' }}>
                                <li>
                                    {users.filter(user => user.requestStatus === true).map(filtereduser => (
                                        <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between' }}>
                                            {filtereduser.firstName}
                                            <Button variant='contained' color='info'>View Application</Button>
                                        </div>
                                    ))}
                                </li>
                            </ul>
                        </item>
                    </Grid>
                </Grid>
            </div>
        </>
    )
}

export default OwnerMangement