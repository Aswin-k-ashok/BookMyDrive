import carReducer from './Features/carFeatures/carFeature'
import allCarsReducer from './Features/carFeatures/getAllCarsFeature'
import userCarReducer from './Features/carFeatures/userCarFeature'
import userLoginReducer from './Features/userFeatures/userLoginFeatures'

const rootReducer = {
  logedInUser: userLoginReducer,
  car: carReducer,
  allCars: allCarsReducer,
  usersCars: userCarReducer,
}

export default rootReducer
