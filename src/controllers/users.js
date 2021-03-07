const usersModels = require('../models/users')

exports.getUsers = (req, res) => {
  usersModels.getUsers()
    .then((result) => {
      res.json({
        message: 'Get Users Successfully!',
        data: result
      })
    })
    .catch((err) => {
      console.log(err)
    })
}

exports.getUserById = (req, res) => {
  const idUser = req.params.id
  usersModels.getUserById(idUser)
    .then((result) => {
      res.json({
        message: 'Success get user by id!',
        data: result
      })
    })
    .catch((err) => {
      console.log(err)
    })
}

exports.creatUser = (req, res) => {
  const { firstName, lastName, email } = req.body
  const data = {
    firstName,
    lastName,
    email
  }
  usersModels.creatUser(data)
    .then((result) => {
      res.status(201).json({
        message: 'Creat user Success!',
        data: result
      })
    })
}

exports.updateUser = (req, res) => {
  const { firstName, lastName, email } = req.body
  const data = {
    firstName,
    lastName,
    email
  }
  const idUser = req.params.id
  usersModels.updateUser(idUser, data)
    .then((result) => {
      res.json({
        message: 'Update Success!',
        data: result
      })
    })
    .catch((err) => {
      console.log(err)
    })
}

exports.deleteUser = (req, res) => {
  const idUser = req.params.id
  usersModels.deleteUser(idUser)
    .then((result) => {
      res.json({
        message: 'Delete Successfully!',
        data: result
      })
    })
}
