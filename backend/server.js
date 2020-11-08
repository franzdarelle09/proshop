import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import productRoutes from './routes/productRoutes.js'

dotenv.config()
connectDB()
const app = express()
app.get('/',(req,res) => {
    res.send('api is running')
})
app.use('/api/products',productRoutes)
app.listen(process.env.PORT,console.log(`server running on port ${process.env.PORT}`))