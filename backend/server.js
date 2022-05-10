const express = require('express')
const app = express()
const mongoose = require('mongoose')

const MONGODB_URI =
  process.env.MONGODB_URI || 'mongodb+srv://bank123:bank123@cluster.vrx2k.mongodb.net/Database?retryWrites=true&w=majority'
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
mongoose.connection.on('error', err => {
  console.error('MongoDB error', err)
}).then(res => console.log("Database Connect"))


app.use(express.json())
const userRouter = require('./controllers/userController')
app.use(userRouter)
// app.get('/products', async (req, res) => {
//   const products = await Product.find({})
//   res.json(products)
// })

// app.get('/products/:id', async (req, res) => {
//   const { id } = req.params

//   try {
//     const product = await Product.findById(id)
//     res.json(product)
//   } catch (error) {
//     res.status(400).json(error)
//   }
// })

// app.post('/products', async (req, res) => {
//   const payload = req.body
//   try {
//     const product = new Product(payload)
//     await product.save()
//     res.status(201).end()
//   } catch (error) {
//     res.status(400).json(error)
//   }
// })

// app.put('/products/:id', async (req, res) => {
//   const payload = req.body
//   const { id } = req.params

//   try {
//     const product = await Product.findByIdAndUpdate(id, { $set: payload })
//     res.json(product)
//   } catch (error) {
//     res.status(400).json(error)
//   }
// })

// app.delete('/products/:id', async (req, res) => {
//   const { id } = req.params

//   try {
//     await Product.findByIdAndDelete(id)
//     res.status(204).end()
//   } catch (error) {
//     res.status(400).json(error)
//   }
// })


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Application is running on port ${PORT}`)
})
