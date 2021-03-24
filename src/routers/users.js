const express = require('express')
const usersController = require('../controllers/users')
const router = express.Router()
const auth = require('../middlewares/auth')

const multer = require('multer')
const { upload } = require('../middlewares/multer')
const {cacheAllProduct, clearAllProduct} = require('../middlewares/redis')



router
  .get('/', auth.verivyAccess, usersController.getUsers)
  .get('/:id', cacheAllProduct, usersController.getUserById)
  // .post('/', usersController.creatUser)
  .put('/:id', upload.single('image'), clearAllProduct,  usersController.updateUser)
  .delete('/:id', clearAllProduct, usersController.deleteUser)
  .post('/register', usersController.register)
  .post('/signin', usersController.signIn)

module.exports = router
