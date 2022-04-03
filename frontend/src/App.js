import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Container } from '@mui/material'
import AppBar from './Components/AppBar'
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
        <Route path='/' element={<HomeScreen />} />
      </Routes>
    </Router>
  )
}

export default App
