require('dotenv').config()
const port = process.env.PORT
const express = require('express')
const bodyParser = require('body-parser')
const {body} = require('express-validator')

const app = express()
const productRoutes = require('./src/routers/products')
const userRoutes = require('./src/routers/users')
const transactions = require('./src/routers/transactions')

// db.authenticate().then(() => {
//     console.log('Berhasil Connect ke DadaBase');
// })

app.use(bodyParser.json())
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-llow-Methods', 'GET, POST, PUT, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  next()
})

app.use('/tikets', productRoutes)
app.use('/transactions', transactions)
app.use('/users', userRoutes)

app.listen(port, () => {
  console.log('server Running ' + port)
})
