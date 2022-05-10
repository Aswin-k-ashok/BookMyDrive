import adminEditUserReducer from './Features/adminFeatures/admin-userFeatures'
import adminLoginReducer from './Features/adminFeatures/adminLoginFeature'
import allUserReducer from './Features/adminFeatures/GetAllUsersFeatures'
import carReducer from './Features/carFeatures/carFeature'
import allCarsReducer from './Features/carFeatures/getAllCarsFeature'
import userCarReducer from './Features/carFeatures/userCarFeature'
import userLoginReducer from './Features/userFeatures/userLoginFeatures'
import ownerRequestReducer from './Features/userFeatures/userRequestToOwnerFeature'
import snackbarReducer from './uiFeatures/snackbarFeature'

const rootReducer = {
  logedInUser: userLoginReducer,
  car: carReducer,
  allCars: allCarsReducer,
  usersCars: userCarReducer,
  snackbarData: snackbarReducer,
  adminLogin: adminLoginReducer,
  allUsers: allUserReducer,
  adminEditUser: adminEditUserReducer,
  ownerRequest: ownerRequestReducer,
}

export default rootReducer
