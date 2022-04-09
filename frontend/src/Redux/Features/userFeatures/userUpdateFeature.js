import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
<<<<<<< HEAD
import { fetchBaseQuery } from '@reduxjs/toolkit/query'
=======
>>>>>>> c865ce6b9933c22422ccaee774ed41d48d6fbd05
import axios from 'axios'

const initialState = {
  loading: false,
  user: {},
  error: null,
}

export const userUpdate = createAsyncThunk(
  'user/update',
  async (values, getState) => {
<<<<<<< HEAD
    const user = JSON.parse(localStorage.getItem('user'))

    console.log(user.token)
=======
    let firstName = values.firstName
    let lastName = values.lastName
    let email = values.email
    let phone = values.phone

    const {
      userLogin: { user },
    } = getState()
    console.log(user)
>>>>>>> c865ce6b9933c22422ccaee774ed41d48d6fbd05

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      },
    }

<<<<<<< HEAD
    let response = await axios.put('/api/users/profile', values, config)
    return response.data
  }
)

const userUpdateSlice = createSlice({
  name: 'users',
  initialState: initialState,
  extraReducers: (builder) => {
    builder
      .addCase(userUpdate.pending, (state, action) => {
        state.loading = true
      })
      .addCase(userUpdate.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload

        localStorage.setItem('user', JSON.stringify(state.user))
      })
      .addCase(userUpdate.rejected, (state, action) => {
        state.loading = false
        state.error = 'error'
      })
  },
})

export default userUpdateSlice.reducer
=======
    let response = await axios.put('/api/users/update', values, config)
    return response.data
  }
)
>>>>>>> c865ce6b9933c22422ccaee774ed41d48d6fbd05
