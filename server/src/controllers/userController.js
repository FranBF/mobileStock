import User from '../models/User.js'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import { createError } from '../createError.js'

export const signUp = async (req, res) => {
  try {
    const hash = bcrypt.hashSync(req.body.password, 10)
    const newUser = new User({ ...req.body, password: hash })
    await newUser.save()
    res.status(200).json(newUser)
  } catch (error) {
    console.log(error)
  }
}

export const signIn = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username })
    if (!user) return next(createError(404, 'User not found'))
    const isCorrect = bcrypt.compareSync(req.body.password, user.password)
    if (!isCorrect) return next(createError(401, 'Credentials wrong'))
    const token = jwt.sign({ id: user._id }, process.env.JWT)
    console.log('login ' + token)
    const { password, ...other } = user._doc

    res.cookie('access_token', token, {
      httpOnly: true
    }).status(200).json(other)
  } catch (error) {
    next(error)
  }
}
