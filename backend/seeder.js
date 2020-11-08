import mongoose from 'mongoose'
import dotenv from 'dotenv'
import users from './data/users.js'
import products from './data/products.js'
import User from './models/userModel.js'
import Product from './models/productModel.js'
import Order from './models/orderModel.js'
import connectDB from './config/db.js'
import e from 'express'

dotenv.config()
connectDB()

const importData = async () => {
    try{
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

       const createdUsers = await User.insertMany(users)
       const adminUser = createdUsers[0]._id

       const sampleProducts = products.map((product) => {
           return {...product, user: adminUser}
       })
       await Product.insertMany(sampleProducts)
       console.log('data imported')
       process.exit()
    }catch(e){
        console.error(e)
    }


}

const destroyData = async () => {
    try{
        await Order.deleteMany()
        await Product.deleteMany()
        await User.deleteMany()

       console.log('data destroyed')
       process.exit()
    }catch(e){
        console.error(e)
    }
}

if(process.argv[2] === '-d'){
    destroyData()
}else{
    importData()
}