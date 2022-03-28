import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'

dotenv.config() // need to install dot env <npm install node env> use dot env config to access all the environment variables in the .env files in the backend folder

connectDB() // connectDB functionality from backend/config/db.js

const app = express()

app.get('/', (req, res) => {
  res.send('api is live....')
})

app.get('/api/products', (req, res) => {
  res.send('cars are loading')
})

const PORT = process.env.PORT || 5000
const DEVLOPMENTMODE = process.env.NODE_ENV

app.listen(
  PORT,
  console.log(`server is running in ${DEVLOPMENTMODE} on port ${PORT}`)
) // app.listen is used to start the server. PORT is from .env , and DEVELPMENTMODE is used to change the development mode from development to production . application will start from different files when the development mode changed
