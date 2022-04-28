import userLoginReducer from './Features/userFeatures/userLoginFeatures'
// import userUpdateReducer from './Features/userFeatures/userUpdateFeature'

const rootReducer = {
  logedInUser: userLoginReducer,
  // logedInUser: userUpdateReducer,
}

export default rootReducer
