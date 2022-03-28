import './App.css'
import { Container } from '@mui/material'
import AppBar from './Components/AppBar'
import HomeScreen from './Components/Screens/userScreens/HomeScreen'
import LoginScreen from './Components/Screens/userScreens/LoginScreen'

function App() {
  return (
    <div className='App'>
      <AppBar />
      <HomeScreen />
      <LoginScreen />
    </div>
  )
}

export default App
