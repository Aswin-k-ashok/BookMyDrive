import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  loading: false,
  owner: {},
  error: null,
}

export const ownerPrivilege = createAsyncThunk(
  'owner/ownerRequest',
  async (values) => {
    let response = await axios.post('/api/owner/register', values)
    return response.data
  }
)

const ownerRequestSlice = createSlice({
  name: 'ownerReqest',
  initialState: initialState,
  reducers: {
    stateReset: (state) => {
      state.loading = initialState.loading
      state.owner = initialState.owner
      state.error = null
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(ownerPrivilege.pending, (state) => {
        state.loading = true
      })
      .addCase(ownerPrivilege.fulfilled, (state, action) => {
        state.loading = false
        state.owner = action.payload
      })
      .addCase(ownerPrivilege.rejected, (state) => {
        state.loading = false
        state.error = 'error'
      })
  },
})

export const { stateReset } = ownerRequestSlice.actions

export default ownerRequestSlice.reducer
