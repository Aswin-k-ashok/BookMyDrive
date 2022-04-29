import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import * as React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import AccountMenu from './AccountMenu';



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







    return (
        <Box sx={{ flexGrow: 1, marginBottom: '4em' }}>

            <AppBar position="static" style={{ position: 'fixed', top: '0', backgroundColor: "white", color: "black", zIndex: '500', boxShadow: 'none' }}>
                <Toolbar>
                    <Button
                        size="large"
                        edge="start"
                        color='inherit'
                        aria-label="menu"
                        sx={{ mr: 1 }}
                    >
                    </Button>
                    <Typography variant="" component="div" sx={{ flexGrow: 1, fontSize: '20px', fontWeight: '900' }} onClick={() => navigate('/')}>
                        Book My Drive
                    </Typography>
                    <AccountMenu className={classes.acountMenuStyle} />
                </Toolbar>
            </AppBar>
        </Box>
    );
}
