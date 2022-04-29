import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  loading: false,
  user: localStorage.getItem('user')
    ? JSON.parse(localStorage.getItem('user'))
    : null,
  error: null,
}

export const userLogin = createAsyncThunk(
  'users/userlogin/',
  async (values) => {
    console.log(values)
    let response = await axios.post('/api/users/login', values)
    return response.data
  }
)

export const getUserProfile = createAsyncThunk(
  'user/getuserdata',
  async (values, getState) => {
    const user = JSON.parse(localStorage.getItem('user'))

    console.log(user.token)

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      },
    }

    let response = await axios.get('/api/users/profile', values, config)
    return response.data
  }
)

export const userUpdate = createAsyncThunk(
  'user/update',
  async (values, getState) => {
    const user = JSON.parse(localStorage.getItem('user'))

    console.log(user.token)

    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      },
    }

    let response = await axios.put('/api/users/profile', values, config)
    return response.data
  }
)

export const userProfilePicUpdate = createAsyncThunk(
  'user/updatedp',
  async (values) => {
    console.log(values)
    const user = JSON.parse(localStorage.getItem('user'))
    console.log(user.token)
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${user.token}`,
      },
    }

    let response = await axios.post(
      '/api/users/profilepic',
      { link: values },
      config
    )
    return response.data
  }
)

export const userLogout = () => {
  localStorage.removeItem('user')
  stateReset()
}

const userLoginSlice = createSlice({
  name: 'login',
  initialState: initialState,
  reducers: {
    stateReset: (state) => {
      state.loading = initialState.loading
      state.user = initialState.user
      state.error = initialState.error
    },
  },
  extraReducers: (builder) => {
    builder
      //user login
      .addCase(userLogin.pending, (state) => {
        state.loading = true
      })
      .addCase(userLogin.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload
        localStorage.setItem('user', JSON.stringify(state.user))
      })
      .addCase(userLogin.rejected, (state) => {
        state.loading = false
        state.error = 'invalid username / password'
      })

      //user update
      .addCase(userUpdate.pending, (state) => {
        state.loading = true
      })
      .addCase(userUpdate.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload
        localStorage.setItem('user', JSON.stringify(state.user))
      })
      .addCase(userUpdate.rejected, (state) => {
        state.loading = false
        state.error = 'error'
      })

      //user profilepic update
      .addCase(userProfilePicUpdate.pending, (state) => {
        state.loading = true
      })
      .addCase(userProfilePicUpdate.fulfilled, (state, action) => {
        state.loading = false
        state.user = action.payload
        localStorage.setItem('user', JSON.stringify(state.user))
      })
      .addCase(userProfilePicUpdate.rejected, (state) => {
        state.loading = false
        state.error = 'someting went wrong'
      })
  },
})

export const { stateReset } = userLoginSlice.actions

export default userLoginSlice.reducer
