import Logout from '@mui/icons-material/Logout';
import PersonAdd from '@mui/icons-material/PersonAdd';
import Settings from '@mui/icons-material/Settings';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { adminLogout } from '../Redux/Features/adminFeatures/adminLoginFeature';
import { userLogout } from '../Redux/Features/userFeatures/userLoginFeatures';


export default function AccountMenu() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const userData = useSelector((state) => {
        return state['logedInUser']
    })

    const { admin } = useSelector((state) => {
        return state['adminLogin']
    })

    const { user, loading, error } = userData


    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const logoutHandler = () => {
        window.location.href = '/login'
        console.log("usr log out")
        dispatch(userLogout())
        // dispatch(stateReset())
        console.log('user logged out')
    }

    const adminLogoutHandler = () => {
        window.location.href = '/admin'
        console.log("usr log out")
        dispatch(adminLogout())
        // dispatch(stateReset())
        console.log('admin logged out')
    }

    let logo = 'G'
    let nameArrayForLogo = ''


    if (user) {

        nameArrayForLogo = user.firstName.split('');

        logo = nameArrayForLogo[0]
    }







    return (
        <>
            {user ? (<React.Fragment>
                <Box sx={{ display: 'flex', alignItems: 'space-between', textAlign: 'center' }} >
                    <Tooltip title="User Home">
                        <Box style={{ backgroundColor: "#D5E5FC", color: '#2B468B', width: "max-content", display: "flex", justifyContent: "space-between", borderRadius: "42px" }}>

                            <div style={{ display: "flex", flexDirection: "column", justifyContent: 'center', alignItems: "flex-start", paddingLeft: '1em' }}>
                                <p style={{ margin: "0px", padding: "0" }}>{user.firstName} {user.lastName}</p>
                                <p style={{ margin: "0px", padding: "0", fontSize: "10px", }}>{user.email}</p>
                            </div>

                            <IconButton
                                onClick={handleClick}
                                size="small"
                                sx={{ ml: 2 }}
                                aria-controls={open ? 'account-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                            >
                                <Avatar sx={{ width: 52, height: 52 }}>
                                    {user.profilePic == null ? <>{logo}</> : (

                                        <img src={user.profilePic} alt="profilePicture" style={{ width: "100%" }} />
                                    )}
                                </Avatar>
                            </IconButton>
                        </Box>
                    </Tooltip>
                </Box>
                <Menu
                    style={{ borderRadius: "10px" }}
                    anchorEl={anchorEl}
                    id="account-menu"
                    open={open}
                    onClose={handleClose}
                    onClick={handleClose}
                    PaperProps={{
                        elevation: 0,
                        sx: {
                            // overflow: 'visible',
                            filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                            mt: 1.5,
                            '& .MuiAvatar-root': {
                                width: 32,
                                height: 32,
                                ml: -0.5,
                                mr: 1,
                            },
                            '&:before': {
                                content: '""',
                                display: 'block',
                                position: 'absolute',
                                top: 0,
                                right: 14,
                                width: 10,
                                height: 10,
                                bgcolor: 'background.paper',
                                transform: 'translateY(-50%) rotate(45deg)',
                                zIndex: 0,
                            },
                        },
                    }}
                    transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                    anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                >
                    <MenuItem onClick={() => navigate('/profile')}>
                        <Avatar /> {user ? (<p>{user.firstName}</p>) : (<p>profile</p>)}

                    </MenuItem>
                    <MenuItem>
                        <Avatar /> My account
                    </MenuItem>
                    <Divider />
                    {/* <MenuItem>
                        <ListItemIcon>
                            <PersonAdd fontSize="small" />
                        </ListItemIcon>
                        Add another account
                    </MenuItem>
                    <MenuItem>
                        <ListItemIcon>
                            <Settings fontSize="small" />
                        </ListItemIcon>
                        Settings
                    </MenuItem> */}



                    <MenuItem onClick={() => logoutHandler()}>
                        <ListItemIcon >
                            <Logout fontSize="small" />
                        </ListItemIcon>
                        Logout
                    </MenuItem>


                </Menu>
            </React.Fragment>) :

                admin ? (<React.Fragment>  {/* admin account menu*/}
                    <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                        {/* <Typography sx={{ minWidth: 100 }}>Contact</Typography>
                <Typography sx={{ minWidth: 100 }}>Profile</Typography> */}
                        <Tooltip title="Account settings">
                            <IconButton
                                onClick={handleClick}
                                size="small"
                                sx={{ ml: 2 }}
                                aria-controls={open ? 'account-menu' : undefined}
                                aria-haspopup="true"
                                aria-expanded={open ? 'true' : undefined}
                            >
                                <Avatar sx={{ width: 32, height: 32 }}> G</Avatar>
                            </IconButton>
                        </Tooltip>
                    </Box>
                    <Menu
                        anchorEl={anchorEl}
                        id="account-menu"
                        open={open}
                        onClose={handleClose}
                        onClick={handleClose}
                        PaperProps={{
                            elevation: 0,
                            sx: {
                                // overflow: 'visible',
                                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                mt: 1.5,
                                '& .MuiAvatar-root': {
                                    width: 32,
                                    height: 32,
                                    ml: -0.5,
                                    mr: 1,
                                },
                                '&:before': {
                                    content: '""',
                                    display: 'block',
                                    position: 'absolute',
                                    top: 0,
                                    right: 14,
                                    width: 10,
                                    height: 10,
                                    bgcolor: 'background.paper',
                                    transform: 'translateY(-50%) rotate(45deg)',
                                    zIndex: 0,
                                },
                            },
                        }}
                        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                    >
                        <MenuItem onClick={() => navigate('/adminDash')}>
                            <Avatar />
                            <p>admin</p>

                        </MenuItem>
                        <MenuItem>
                            <Avatar /> My account
                        </MenuItem>
                        <Divider />
                        <MenuItem>
                            <ListItemIcon>
                                <PersonAdd fontSize="small" />
                            </ListItemIcon>
                            Add another account
                        </MenuItem>
                        <MenuItem>
                            <ListItemIcon>
                                <Settings fontSize="small" />
                            </ListItemIcon>
                            Settings
                        </MenuItem>




                        <MenuItem onClick={() => adminLogoutHandler()}>
                            <ListItemIcon >
                                <Logout fontSize="small" />
                            </ListItemIcon >
                            Log out
                        </MenuItem>


                    </Menu>
                </React.Fragment>) :

                    (<React.Fragment>  {/* no user fragment*/}
                        <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                            {/* <Typography sx={{ minWidth: 100 }}>Contact</Typography>
                <Typography sx={{ minWidth: 100 }}>Profile</Typography> */}
                            <Tooltip title="Account settings">
                                <IconButton
                                    onClick={handleClick}
                                    size="small"
                                    sx={{ ml: 2 }}
                                    aria-controls={open ? 'account-menu' : undefined}
                                    aria-haspopup="true"
                                    aria-expanded={open ? 'true' : undefined}
                                >
                                    <Avatar sx={{ width: 32, height: 32 }}> G</Avatar>
                                </IconButton>
                            </Tooltip>
                        </Box>
                        <Menu
                            anchorEl={anchorEl}
                            id="account-menu"
                            open={open}
                            onClose={handleClose}
                            onClick={handleClose}
                            PaperProps={{
                                elevation: 0,
                                sx: {
                                    // overflow: 'visible',
                                    filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                                    mt: 1.5,
                                    '& .MuiAvatar-root': {
                                        width: 32,
                                        height: 32,
                                        ml: -0.5,
                                        mr: 1,
                                    },
                                    '&:before': {
                                        content: '""',
                                        display: 'block',
                                        position: 'absolute',
                                        top: 0,
                                        right: 14,
                                        width: 10,
                                        height: 10,
                                        bgcolor: 'background.paper',
                                        transform: 'translateY(-50%) rotate(45deg)',
                                        zIndex: 0,
                                    },
                                },
                            }}
                            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
                        >
                            <MenuItem onClick={() => navigate('/')}>
                                <Avatar />
                                <p>gust user</p>

                            </MenuItem>
                            <MenuItem>
                                <Avatar /> My account
                            </MenuItem>
                            <Divider />
                            <MenuItem>
                                <ListItemIcon>
                                    <PersonAdd fontSize="small" />
                                </ListItemIcon>
                                Add another account
                            </MenuItem>
                            <MenuItem>
                                <ListItemIcon>
                                    <Settings fontSize="small" />
                                </ListItemIcon>
                                Settings
                            </MenuItem>




                            <MenuItem onClick={() => logoutHandler()}>
                                <ListItemIcon >
                                    <Logout fontSize="small" />
                                </ListItemIcon>
                                Log In
                            </MenuItem>


                        </Menu>
                    </React.Fragment>)}
        </>

    );
}