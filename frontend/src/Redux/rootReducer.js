import { combineReducers } from '@reduxjs/toolkit'
import loginReducer from './Features/userFeatures/userLoginFeatures'
import registerReducer from './Features/userFeatures/userRegisterFeature'
import updateReducer from './Features/userFeatures/userUpdateFeature'
const rootReducer = combineReducers({
  login: loginReducer,
  register: registerReducer,
  // update: updateReducer,
})

export default rootReducer
