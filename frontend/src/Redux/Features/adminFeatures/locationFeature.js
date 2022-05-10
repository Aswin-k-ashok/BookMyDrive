import { async } from '@firebase/util'
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  loading: false,
  localStorage: {},
  error: null,
}

export const addNewLocation = createAsyncThunk(
  'admin/location',
  async (values) => {
    let response = await axios.post('/api/location', values)
    return response.data
  }
)
