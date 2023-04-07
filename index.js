import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import fileUpload from 'express-fileupload'

import authRoute from './routes/auth.js'
import postRoute from './routes/posts.js'
import commentRoute from './routes/comments.js'

const app = express()
dotenv.config()

mongoose.connect(process.env.MONGO)
.then(()=>console.log('bd ok'))
.catch(()=>console.log('bd error'))

app.use(cors())
app.use(fileUpload())
app.use(express.json())
app.use(express.static('uploads'))

app.use('/api/auth', authRoute)
app.use('/api/posts', postRoute)
app.use('/api/comments', commentRoute)


app.listen(process.env.PORT, ()=> console.log('ok server'))