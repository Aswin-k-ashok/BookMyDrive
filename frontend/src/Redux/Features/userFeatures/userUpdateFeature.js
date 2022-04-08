import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  loading: false,
  user: {},
  error: null,
}

export const userUpdate = createAsyncThunk(
  'user/update',
  async (values, getState) => {
    let firstName = values.firstName
    let lastName = values.lastName
    let email = values.email
    let phone = values.phone

    const {
      userLogin: { user },
    } = getState()
    console.log(user)

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      },
    }

    let response = await axios.put('/api/users/update', values, config)
    return response.data
  }
)
