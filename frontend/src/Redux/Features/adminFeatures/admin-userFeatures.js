import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  loading: false,
  user: {},
  error: null,
}

export const blockUser = createAsyncThunk('/user/block', async (values) => {
  let response = await axios.post('/api/admin/block', { id: values })
  console.log(response)
  return response.data
})

export const unblockUser = createAsyncThunk('/user/unblock', async (values) => {
  let response = await axios.post('/api/admin/unblock', { id: values })
  return response.data
})

const adminSideUserEditSlice = createSlice({
  name: 'users',
  initialState: initialState,
  reducers: {
    adminEditUserStateReset: (state) => {
      state.loading = false
      state.user = {}
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(blockUser.pending, (state) => {
        state.loading = true
      })
      .addCase(blockUser.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload
      })
      .addCase(blockUser.rejected, (state) => {
        state.loading = false
        state.error = 'error'
      })
      .addCase(unblockUser.pending, (state) => {
        state.loading = true
      })
      .addCase(unblockUser.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload
      })
      .addCase(unblockUser.rejected, (state) => {
        state.loading = false
        state.error = 'error'
      })
  },
})

export const { adminEditUserStateReset } = adminSideUserEditSlice.actions
export default adminSideUserEditSlice.reducer
