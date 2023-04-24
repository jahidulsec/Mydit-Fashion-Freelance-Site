import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import authRoute from './routes/auth.route.js'
import userRoute from './routes/user.route.js'
import gigRoute from './routes/gig.route.js'
import conversationRoute from './routes/conversation.route.js'
import reviewRoute from './routes/review.route.js'
import messageRoute from './routes/message.route.js'
import orderRoute from './routes/order.route.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'

// create express app
const app = express()

dotenv.config()
mongoose.set("strictQuery", true)

// connect to mongo database
const connect = async() => {
  
  try {
    await mongoose.connect(process.env.MONGO);
    console.log("Connected to db!")
    
  } catch (error) {
    console.log(error);
  }
}
  

// connect to different frontend server
app.use(cors({origin:"http://localhost:5173", credentials: true}))

// post json file accept file
app.use(express.json())

// parse cookie
app.use(cookieParser())



// urlspatterns (projects)
app.use('/api/auth',authRoute)
app.use('/api/users',userRoute)
app.use('/api/messages',messageRoute)
app.use('/api/orders',orderRoute)
app.use('/api/gigs',gigRoute)
app.use('/api/reviews',reviewRoute)
app.use('/api/conversations',conversationRoute)


// error handling middleware
app.use((error, req, res, next) => {
  const errorStatus = error.status || 500
  const errorMessage = error.message || "Something wrong!"

  return res.status(errorStatus).send(errorMessage)
})


// connect to db and server
app.listen(8800, () => {
  connect()
  console.log("backend server is running!")
})

