import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  snackbarOpen: false,
  snackBarType: '',
  snackbarMessage: '',
  snackbarPositionVertical: '',
  snackbarPositionHorizondal: '',
  snackbarTransition: '',
}

const snackbarSlice = createSlice({
  name: 'snack',
  initialState: initialState,
  reducers: {
    openSnackbarAction: (state, action) => {
      console.log(action.payload)
      state.snackbarOpen = true
      state.snackBarType = action.payload.severity
      state.snackbarMessage = action.payload.snackmessage
    },
    closeSnackbarAction: (state, action) => {
      state.snackbarOpen = false
    },
  },
})

export const { openSnackbarAction, closeSnackbarAction } = snackbarSlice.actions

export default snackbarSlice.reducer
