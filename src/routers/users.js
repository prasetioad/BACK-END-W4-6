const express = require('express')
const usersController = require('../controllers/users')
const router = express.Router()

router
  .get('/', usersController.getUsers)
  .get('/:id', usersController.getUserById)
  .post('/', usersController.creatUser)
  .put('/:id', usersController.updateUser)
  .delete('/:id', usersController.deleteUser)

module.exports = router
