import { combineReducers } from '@reduxjs/toolkit'
import getAllCarsReducer from './Features/carFeatures/getAllCarsFeature'
//user reducers
import loginReducer from './Features/userFeatures/userLoginFeatures'
import registerReducer from './Features/userFeatures/userRegisterFeature'
import updateReducer from './Features/userFeatures/userUpdateFeature'

const rootReducer = combineReducers({
  //user reducers
  login: loginReducer,
  register: registerReducer,
  update: updateReducer,

  //car reducers
  //carDetails: carUploadReducer,
  getAllCars: getAllCarsReducer,
})

export default rootReducer
