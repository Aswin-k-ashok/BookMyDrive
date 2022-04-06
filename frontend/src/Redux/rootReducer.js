import loginReducer from './Features/userFeatures/userLoginFeatures'
import registerReducer from './Features/userFeatures/userRegisterFeature'
const rootReducer = {
  login: loginReducer,
  register: registerReducer,
}

export default rootReducer
