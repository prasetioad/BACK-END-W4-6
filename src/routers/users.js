const express = require('express')
const usersController = require('../controllers/users')
const router = express.Router()
const auth = require('../middlewares/auth')

const multer = require('multer')
const { upload } = require('../middlewares/multer')
const {cacheAllProduct, clearAllProduct} = require('../middlewares/redis')



router
  .get('/', auth.verivyAccess, usersController.getUsers)
  .get('/:id',auth.verivyAccess,  usersController.getUserById)
  .put('/:id',auth.verivyAccess, upload.single('image'), clearAllProduct,  usersController.updateUser)
  .delete('/:id',auth.verivyAccess, clearAllProduct, usersController.deleteUser)
  .post('/register', usersController.register)
  .post('/signin', usersController.signIn)
  .post('/auth', usersController.creatUser)
  .post('/forgot', usersController.forgotCheck)
  .put('/forgot/:id', usersController.forgotUpdate)

module.exports = router
