import './App.css'
import { Container } from '@mui/material'
import AppBar from './Components/AppBar'
import HomeScreen from './Components/Screens/userScreens/HomeScreen'

function App() {
  return (
    <div className='App'>
      <AppBar />
      <HomeScreen />
    </div>
  )
}

export default App
