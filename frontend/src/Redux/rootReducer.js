import { combineReducers } from '@reduxjs/toolkit'
//user reducers
import loginReducer from './Features/userFeatures/userLoginFeatures'
import registerReducer from './Features/userFeatures/userRegisterFeature'
import updateReducer from './Features/userFeatures/userUpdateFeature'

//car reducers
import carUploadReducer from './Features/carFeatures/uploadCarFeature'
import getAllCarsReducer from './Features/carFeatures/getAllCarsFeature'

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
