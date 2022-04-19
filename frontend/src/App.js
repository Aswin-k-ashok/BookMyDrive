import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AppBar from './Components/AppBar'
import AdminLoginScreen from './Components/Screens/adminScreen/AdminLogin'
import ImageUpload from './Components/Screens/ownerScreens/ImageUpload'
import CarDetails from './Components/Screens/userScreens/CarDetails'
import HomeScreen from './Components/Screens/userScreens/HomeScreen'
import LoginScreen from './Components/Screens/userScreens/LoginScreen'
import RegisterScreen from './Components/Screens/userScreens/RegisterScreen'
import UserProfile from './Components/Screens/userScreens/UserProfile'
function App() {
  return (
    <Router>
      <AppBar />
      <Routes>
        <Route path='/login' element={<LoginScreen />} />
        <Route path='/register' element={<RegisterScreen />} />
        <Route path='/profile' element={<UserProfile />} />
        <Route path='/upload' element={<ImageUpload />} />
        <Route path='/carinfo' element={<CarDetails />} />
        <Route path='/admin' element={<AdminLoginScreen />} />
        <Route path='/' element={<HomeScreen />} />
      </Routes>
    </Router>
  )
}

export default App
