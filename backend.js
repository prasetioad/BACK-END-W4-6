require('dotenv').config()
const port = process.env.PORT
const express = require('express')
const bodyParser = require('body-parser')
const { body } = require('express-validator')
const { v4: uuidv4 } = require('uuid')
const bcrypt = require('bcryptjs')

const app = express()
const productRoutes = require('./src/routers/products')
const userRoutes = require('./src/routers/users')
const transactions = require('./src/routers/transactions')
const movieRoutes = require('./src/routers/movie')
const providerRoutes = require('./src/routers/provider')

const morgan = require('morgan')
const cors = require('cors')
const multer = require('multer')

// db.authenticate().then(() => {
//     console.log('Berhasil Connect ke DadaBase');
// })
app.use(cors())
app.use(morgan('combined'))
app.use(bodyParser.json())
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-llow-Methods', 'GET, POST, PUT, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  next()
})

app.use('/image', express.static('./uploads'))
app.use('/tikets', productRoutes) //Publik akses Home, Movie Detil, view All, upcoming movie, month, sort
app.use('/transactions', transactions) 
app.use('/users', userRoutes)
app.use('/movies', movieRoutes)
app.use('/provider', providerRoutes)
app.use('/login', (req, res) => {
  res.send({
    token: 'test123'
  })
})

app.listen(port, () => {
  console.log('server Running ' + port)
})
