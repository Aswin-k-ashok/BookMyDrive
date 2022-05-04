import carReducer from './Features/carFeatures/carFeature'
import allCarsReducer from './Features/carFeatures/getAllCarsFeature'
import userCarReducer from './Features/carFeatures/userCarFeature'
import userLoginReducer from './Features/userFeatures/userLoginFeatures'
import snackbarReducer from './uiFeatures/snackbarFeature'

const rootReducer = {
  logedInUser: userLoginReducer,
  car: carReducer,
  allCars: allCarsReducer,
  usersCars: userCarReducer,
  snackbarData: snackbarReducer,
}

export default rootReducer
