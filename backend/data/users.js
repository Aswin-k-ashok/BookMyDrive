import bcrypt from 'bcryptjs'

const users = [
  {
    firstName: 'admin',
    lastName: 'user',
    email: 'admin@bmd.com',
    password: bcrypt.hashSync('123456', 10),
    phone: 8089414817,
  },
  {
    firstName: 'user',
    lastName: 'one',
    email: 'userone@gmail.com',
    password: bcrypt.hashSync('123456', 10),
    phone: '8811223322',
  },
]

export default users
