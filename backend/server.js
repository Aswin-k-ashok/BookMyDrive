import dotenv from 'dotenv'
import express from 'express'
import connectDB from './config/db.js'
import adminRoutes from './routes/adminRoutes.js'
import carRoutes from './routes/carRoutes.js'
import ownerRoutes from './routes/ownerRoutes.js'
import userRoutes from './routes/userRoutes.js'
dotenv.config() // need to install dot env <npm install node env> use dot env config to access all the environment variables in the .env files in the backend folder

connectDB() // connectDB functionality from backend/config/db.js

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send('api is live....')
})

app.use('/api/users', userRoutes)
app.use('/api/admin', adminRoutes)
app.use('/api/cars', carRoutes)
app.use('/api/owner', ownerRoutes)

app.use((err, req, res, next) => {
  const statusCode = res.statusCode === 200 ? 500 : res.statusCode
  res.status(statusCode)
  res.json({
    message: err.message,
    stack: process.env.NODE_ENV === 'production' ? null : err.stack,
  })
})

const PORT = process.env.PORT || 5000
const DEVLOPMENTMODE = process.env.NODE_ENV

app.listen(
  PORT,
  console.log(`server is running in ${DEVLOPMENTMODE} on port ${PORT}`)
) // app.listen is used to start the server. PORT is from .env , and DEVELPMENTMODE is used to change the development mode from development to production . application will start from different files when the development mode changed
