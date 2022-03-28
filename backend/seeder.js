import mongoose from 'mongoose'
import dotenv from 'dotenv'
import users from './data/users.js'

import User from './models/userModel.js'

import connectDB from './config/db.js'

dotenv.config()
connectDB()

const importData = async () => {
  // this funcation is mainly used for importaing some sample data into the application
  try {
    await User.deleteMany() // first clear out any existing data if there
    const createdUsers = await User.insertMany(users) // then insert the users from users.js file into the User collection in the databases
    // occupy more collections by making a simple dummy js file and inserting it into the collection itself > awit Order.insertMany(orders)
    // const adminUser = createdUsers[0]._id

    console.log('Data imported')
    process.exit()
  } catch (error) {
    console.error(`${error}`)
    process.exit(1)
  }
}

const destroyData = async () => {
  // almost same function used to remove any data for re initit
  try {
    await User.deleteMany()
    console.log('Data destroyed')
    process.exit()
  } catch (error) {
    console.error(`${error}`)
  }
}

if (process.argv[2] === '-d') {
  destroyData() //npm run data:distroy
} else {
  importData() // npm run data:import
}
