import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  modalOpen: false,
  modalMessage: '',
  buttonOneText: '',
  buttonOneColor: '',
  buttonTwoText: '',
  buttonTwoColor: '',
  modalSuccess: false,
}

const modalSlice = createSlice({
  name: 'modal',
  initialState: initialState,
  reducers: {
    openModalAction: (state, action) => {
      console.log(action.payload)
      state.modalOpen = true
      state.modalMessage = action.payload.message
      state.buttonOneText = action.payload.textOne
      state.buttonOneColor = action.payload.colorOne
      state.buttonTwoText = action.payload.textTwo
      state.buttonTwoColor = action.payload.colorTwo
    },
    modalStateClearAction: (state) => {
      state.modalOpen = false
      state.modalMessage = initialState.modalMessage
      state.buttonOneText = initialState.buttonOneText
      state.buttonOneColor = initialState.buttonOneColor
      state.buttonTwoText = initialState.buttonTwoText
      state.buttonTwoColor = initialState.buttonTwoColor
      state.modalSuccess = initialState.modalSuccess
    },
    modalSuccessAction: (state) => {
      state.modalSuccess = true
    },
  },
})

export const { openModalAction, modalStateClearAction, modalSuccessAction } =
  modalSlice.actions

export default modalSlice.reducer
