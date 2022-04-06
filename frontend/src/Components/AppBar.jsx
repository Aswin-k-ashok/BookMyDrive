import * as React from 'react';
import { useEffect } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AccountMenu from './AccountMenu';
import { makeStyles } from '@mui/styles'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logedInUser } from '../Redux/Features/userFeatures/userLoginFeatures';

const useStyles = makeStyles({
    acountMenuStyle: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        padding: "0.5em"
    }
})




export default function ButtonAppBar() {
    const navigate = useNavigate()
    const classes = useStyles()

    let userInfo = useSelector((state) => {
        return state['login']
    })

    let { user } = userInfo

    console.log(user);



    return (
        <Box sx={{ flexGrow: 1 }}>

            console.log(userInfo)
            <AppBar position="static" style={{ position: 'fixed', top: '0' }}>
                <Toolbar>
                    <Button
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                    </Button>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={() => navigate('/')}>
                        Book My Drive
                    </Typography>
                    <AccountMenu className={classes.acountMenuStyle} />
                </Toolbar>
            </AppBar>
        </Box>
    );
}
