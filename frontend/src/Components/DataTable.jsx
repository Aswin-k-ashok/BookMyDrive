import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import * as React from 'react';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getUserTableData } from '../Redux/Features/adminFeatures/admin-TableDataFeature';
import { blockUser, unblockUser } from '../Redux/Features/adminFeatures/admin-userFeatures';



export default function DataTable() {

    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [sample, setSample] = useState([])

    const tableData = useSelector((state) => {
        return state['tableData']
    })
    const columns = [
        { field: '_id', headerName: 'id', width: 250 },
        { field: 'firstName', headerName: 'First Name', width: 150 },
        { field: 'lastName', headerName: 'Last Name', width: 150 },
        { field: 'email', headerName: 'Email', width: 250 },
        { field: 'phone', headerName: 'Phone', width: 250 }
    ];

    const irows = [
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

    console.log("this is datatable page")

    const rows = tableData.user

    // const test = [...irows, rows]
    // console.log(rows)
    useEffect(() => {
        axios.get("/api/admin/userTableData").then((data) => {
            setSample(data.data.user)
        })

        dispatch(getUserTableData())
    }, [dispatch])


    console.log(sample, 'sample');
    console.log(rows, 'rows')


    // const row = []

    // row = [...row, tableData.users.user]

    // console.log(row)





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
                getRowId={(row) => row._id}
                rows={sample}
                columns={columns}
                pageSize={10}
                rowsPerPageOptions={[5]}
            />

        </div>
    );
}
