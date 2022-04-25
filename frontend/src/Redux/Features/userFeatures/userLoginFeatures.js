import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  loading: false,
  user: {},
  error: null,
}

const logoutState = {
  loading: false,
  user: {
    firstName: 'GUST',
    isAuth: false,
  },
  error: null,
}

export const userLogin = createAsyncThunk('users/userlogin', async (values) => {
  let response = await axios.post('/api/users/login', values)
  return response.data
})

export const userLogout = () => {
  localStorage.removeItem('user')
  localStorage.setItem('user', JSON.stringify(logoutState))
}

const userLoginSlice = createSlice({
  name: 'login',
  initialState: initialState,
  reducers: {},
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
        state.error = 'Error'
      })
  },
})

export default userLoginSlice.reducer
