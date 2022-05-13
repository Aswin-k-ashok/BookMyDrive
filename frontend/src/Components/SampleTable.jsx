import * as React from 'react';
import { useEffect } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { blockUser, unblockUser } from '../../../Redux/Features/adminFeatures/admin-userFeatures';
import { getAllUsers } from "../../../Redux/Features/adminFeatures/GetAllUsersFeatures";


const columns = [
    { field: 'fullName', headerName: 'Full Name' },
    { field: 'email', headerName: 'Email' },
    { field: 'phone', headerName: 'Phone number' },
    { field: 'isBlocked', headerName: 'Block Status' },
    { field: 'isOwner', headerName: 'Owner status' },
    { field: 'profile', headerName: 'View Profile' }
];

const rows = [
    { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
    { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
    { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
    { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
    { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
    { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
    { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
    { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
    { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function DataTable() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const tableData = useSelector((state) => {
        return state['allUsers']
    })
    console.log(tableData)
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
        <div style={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                checkboxSelection
            />
        </div>
    );
}
