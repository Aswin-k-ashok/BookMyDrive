import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  loading: false,
  tableData: {},
  error: null,
}

export const getUserTableData = createAsyncThunk('/userTableData', async () => {
  let response = await axios.get('/api/admin/userTableData')
  console.log(response.data)
  return response.data
})

const tableDataSlice = createSlice({
  name: 'tableData',
  initialState: initialState,
  reducers: {
    tableDataReset: (state) => {
      state.loading = false
      state.tableData = {}
      state.error = null
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getUserTableData.pending, (state) => {
        state.loading = true
      })
      .addCase(getUserTableData.fulfilled, (state, action) => {
        state.loading = false
        state.tableData = action.payload
      })
      .addCase(getUserTableData.rejected, (state) => {
        state.loading = false
        state.error = 'something went wrong'
      })
  },
})

export const { tableDataReset } = tableDataSlice.actions

export default tableDataSlice.reducer
