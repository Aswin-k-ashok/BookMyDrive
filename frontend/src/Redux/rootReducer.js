import userLoginReducer from './Features/userFeatures/userLoginFeatures'

// const rootReducer = combineReducers({
//   logedInUser: userLoginReducer,
// })

const rootReducer = {
  logedInUser: userLoginReducer,
}

export default rootReducer
