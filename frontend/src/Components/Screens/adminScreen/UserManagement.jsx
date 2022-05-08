import React from 'react'
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { getAllUsers } from "../../../Redux/Features/adminFeatures/GetAllUsersFeatures";
import Table from '@mui/material/Table';
import { blockUser, unblockUser } from '../../../Redux/Features/adminFeatures/admin-userFeatures';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button } from '@mui/material';

// function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
// }

// const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

function UserManagement() {

    const dispatch = useDispatch()
    const { loading, users, error } = useSelector((state) => {
        return state['allUsers']
    })

    useEffect(() => {
        dispatch(getAllUsers())
    }, [dispatch])

    console.log(users)

    const userBlockHandler = (id) => {
        console.log(id)
        dispatch(blockUser(id))
    }
    const userUnblockHandler = (id) => {
        console.log(id)
        dispatch(unblockUser(id))
    }


    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>User Full Name</TableCell>
                            <TableCell align="right">Email</TableCell>
                            <TableCell align="right">phone</TableCell>
                            <TableCell align="right">Block Status</TableCell>
                            <TableCell align="right">Owner Previlage</TableCell>
                            <TableCell align='right'>BLOCK USER</TableCell>
                            <TableCell align='right'>UNBLOCK USER</TableCell>
                            <TableCell align='right'>View profile</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users.map((user) => (
                            <TableRow
                                key={user._id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                {console.log(user)}
                                <TableCell component="th" scope="row">
                                    {user.firstName} {user.lastName}
                                </TableCell>
                                <TableCell align="right">{user.email}</TableCell>
                                <TableCell align="right">{user.phone}</TableCell>
                                <TableCell align="right">{user.isBlocked}</TableCell>
                                <TableCell align="right">{user.isOwner}</TableCell>
                                <TableCell align='right'><Button onClick={() => userBlockHandler(user._id)}>Block user</Button></TableCell>
                                <TableCell align='right'><Button onClick={() => userUnblockHandler(user._id)}>Un block user</Button></TableCell>
                                <TableCell align='right'><Button>Visit profile</Button></TableCell>


                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}

export default UserManagement