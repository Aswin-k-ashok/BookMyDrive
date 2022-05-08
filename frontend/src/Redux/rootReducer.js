import adminLoginReducer from './Features/adminFeatures/adminLoginFeature'
import carReducer from './Features/carFeatures/carFeature'
import allCarsReducer from './Features/carFeatures/getAllCarsFeature'
import userCarReducer from './Features/carFeatures/userCarFeature'
import userLoginReducer from './Features/userFeatures/userLoginFeatures'
import snackbarReducer from './uiFeatures/snackbarFeature'
import allUserReducer from './Features/adminFeatures/GetAllUsersFeatures'
import adminEditUserReducer from './Features/adminFeatures/admin-userFeatures'

const rootReducer = {
  logedInUser: userLoginReducer,
  car: carReducer,
  allCars: allCarsReducer,
  usersCars: userCarReducer,
  snackbarData: snackbarReducer,
  adminLogin: adminLoginReducer,
  allUsers: allUserReducer,
  adminEditUser: adminEditUserReducer,
}

export default rootReducer
