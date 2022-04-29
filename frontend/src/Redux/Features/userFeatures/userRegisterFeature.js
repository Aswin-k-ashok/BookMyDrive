import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const UserInitialState = {
  loading: false,
  user: {},
  error: null,
}

export const userRegister = createAsyncThunk(
  'user/register',
  async (values) => {
    let firstName = values.firstName
    let lastName = values.lastName
    let email = values.email
    let phone = values.phone
    let password = values.password

    let response = await axios.post('/api/users', {
      firstName,
      lastName,
      email,
      phone,
      password,
    })
    return response.data
  }
)

const userRegisterSlice = createSlice({
  name: 'user',
  initialState: UserInitialState,
  extraReducers: (builder) => {
    builder
      .addCase(userRegister.pending, (state, action) => {
        state.loading = true
      })
      .addCase(userRegister.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload
      })
      .addCase(userRegister.rejected, (state, action) => {
        state.loading = false
      })
  },
})

export default userRegisterSlice.reducer
