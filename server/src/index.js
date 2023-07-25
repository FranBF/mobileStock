import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import userRouter from './routes/userRoutes.js'
import managerRouter from './routes/managerRoutes.js'
import deviceRouter from './routes/deviceRoutes.js'

const app = express()
dotenv.config()
const PORT = 3000
const DB_URI = process.env.MONGO_URL

app.use(cors({ credentials: true, origin: true }))
app.use(express.json())
app.use(cookieParser())
app.use(bodyParser.json())
app.use('/api/users', userRouter)
app.use('/api', managerRouter)
app.use('/api', deviceRouter)

app.listen(PORT, () => {
  console.log(`Server started at http://localhost:${PORT}`)
})

const connect = async () => {
  try {
    await mongoose.connect(DB_URI)
  } catch (error) {
    console.log(error)
  }
}

connect().then(() => console.log('funciona')).catch(err => console.log(err))
