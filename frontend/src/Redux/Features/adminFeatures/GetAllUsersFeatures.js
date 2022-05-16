import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  loading: false,
  users: [],
  error: null,
}

export const getAllUsers = createAsyncThunk('/allusers', async () => {
  let response = await axios.get('/api/admin/userTableData')
  console.log(response.data)
  return response.data
})

export const getAllOwnerRequestedUsers = createAsyncThunk(
  '/reqestedusers',
  async () => {
    let response = await axios.get('/api/admin/owner')
    return response.data
  }
)

const allUsersSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {
    userStateReset: (state) => {
      state.loading = false
      state.users = []
      state.error = null
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(getAllUsers.pending, (state) => {
        state.loading = true
      })
      .addCase(getAllUsers.fulfilled, (state, action) => {
        state.loading = false
        state.users = action.payload
      })
      .addCase(getAllUsers.rejected, (state) => {
        state.loading = false
        state.error = 'error'
      })
      .addCase(getAllOwnerRequestedUsers.pending, (state) => {
        state.loading = true
      })
      .addCase(getAllOwnerRequestedUsers.fulfilled, (state, action) => {
        state.loading = false
        state.users = action.payload
      })
      .addCase(getAllOwnerRequestedUsers.rejected, (state) => {
        state.loading = false
        state.error = 'error'
      })
  },
})

export const { userStateReset } = allUsersSlice.actions
export default allUsersSlice.reducer
