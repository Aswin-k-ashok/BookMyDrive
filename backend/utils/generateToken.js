import jwt from 'jsonwebtoken'

const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    // 🗝️ 'sign' method is used for generating the token , it must be provided a payload from the reqest , and also a jwt secret and it must be confidential 🕵️

    expiresIn: '60d',
  })
}

export default generateToken
