import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AppBar from './Components/AppBar'
// ui elements
import CustomSnackbar from './Components/CustomSnackbar'
import AdminDash from './Components/Screens/adminScreen/AdminDash'
//admin screens
import AdminLoginScreen from './Components/Screens/adminScreen/AdminLogin'
import LocationManagement from './Components/Screens/adminScreen/LocationManagement'
import OwnerManagement from './Components/Screens/adminScreen/OwnerManagement'
import Report from './Components/Screens/adminScreen/Report'
import UserManagement from './Components/Screens/adminScreen/UserManagement'
// owner screens
import AddCar from './Components/Screens/ownerScreens/AddCar'
import DashBoard from './Components/Screens/ownerScreens/DashBoard'
// userRoutes
import ImageUpload from './Components/Screens/ownerScreens/ImageUpload'
import MyCars from './Components/Screens/ownerScreens/MyCars'
import Offer from './Components/Screens/ownerScreens/Offer'
import Reports from './Components/Screens/ownerScreens/Reports'
import Trips from './Components/Screens/ownerScreens/Trips'
import CarDetails from './Components/Screens/userScreens/CarDetails'
import DpUpload from './Components/Screens/userScreens/DpUpload'
import HomeScreen from './Components/Screens/userScreens/HomeScreen'
import LoginScreen from './Components/Screens/userScreens/LoginScreen'
import RegisterScreen from './Components/Screens/userScreens/RegisterScreen'
import UserProfile from './Components/Screens/userScreens/UserProfile'

function App() {
  return (
    <>
      <CustomSnackbar />
      <Router>
        <AppBar />
        <Routes>
          {/* admin screens */}
          <Route path='/adminDash' element={<AdminDash />} />
          <Route path='/adminlogin' element={<AdminLoginScreen />} />
          <Route path='/location' element={<LocationManagement />} />
          <Route path='/owner' element={<OwnerManagement />} />
          <Route path='/user' element={<UserManagement />} />
          <Route path='/adminreport' element={<Report />} />
          {/* user screens */}
          <Route path='/login' element={<LoginScreen />} />
          <Route path='/register' element={<RegisterScreen />} />
          <Route path='/profile' element={<UserProfile />} />
          <Route path='/upload' element={<ImageUpload />} />
          <Route path='/carDetails/:id' element={<CarDetails />} />
          <Route path='/admin' element={<AdminLoginScreen />} />
          <Route path='/uploaddp' element={<DpUpload />} />
          <Route path='/' element={<HomeScreen />} />
          {/* owner screens */}
          <Route path='/addCar' element={<AddCar />} />
          <Route path='/myCar' element={<MyCars />} />
          <Route path='/offer' element={<Offer />} />
          <Route path='/Report' element={<Reports />} />
          <Route path='/TripMangement' element={<Trips />} />
          <Route path='/ownerDash' element={<DashBoard />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
