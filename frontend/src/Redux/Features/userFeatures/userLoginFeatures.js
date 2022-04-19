import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const UserInitialState = {
  loading: false,
  user: {},
  error: null,
}

export const userLogin = createAsyncThunk('user/login', async (values) => {
  let email = values.email
  let password = values.password
  let response = await axios.post('/api/users/login', { email, password })
  return response.data
})

const userLoginSlice = createSlice({
  name: 'users',
  initialState: UserInitialState,
  extraReducers: (builder) => {
    builder
      .addCase(userLogin.pending, (state, action) => {
        state.loading = true
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload

        localStorage.setItem('user', JSON.stringify(state.user))
      })
      .addCase(userLogin.rejected, (state, action) => {
        state.loading = false
        state.error = 'error'
      })
  },
})

export const userLogout = () => {
  localStorage.removeItem('user')
}

export default userLoginSlice.reducer
