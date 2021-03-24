const usersModels = require('../models/users')
const privateKey = process.env.PRIVATEKEY
const helpers = require('../helpers/helper')
const { v4: uuidv4 } = require('uuid')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const hash = require('../helpers/hash')
const { sendMail } = require('../helpers/email')

exports.getUsers = (req, res) => {
  console.log(req);
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
  const { email, password } = req.body
  console.log(email)
  const data = {
    email,
    password
  }
  console.log(data)
  usersModels.creatUser(data)
    .then((result) => {
      res.status(201).json({
        message: 'Creat user Success!',
        data: result
      })
    })
}

exports.updateUser = (req, res) => {
  const { firstName, lastName, email, phone_number } = req.body
  const image = req.file.filename
  const data = {
    firstName,
    lastName,
    email,
    phone_number,
    image: `http://localhost:5400/image/${image}`
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

exports.register = async (req, res) => {
  try {
    console.log('try berjalan ' + req.body.email)
    const { email, password } = req.body
    const result = await usersModels.findUser(email)
    if (result.length !== 0) {
      return helpers.response(res, null, 401, { email: 'Email sudah terdaftar!' })
    }
    console.log('mulai membaca data')
    const data = {
      userid: uuidv4(),
      email,
      password: await hash.hashPassword(password)

    }
    const insert = await usersModels.creatUser(data) 
    sendMail(email)
    return helpers.response(res, insert, 401, null)
  } catch (error) {
    console.log(error)
    return helpers.response(res, null, 500, { message: 'Internal server Error!' })
  }
}

exports.signIn = async (req, res) => {
  try {
    const { email, password } = req.body
    const result = await usersModels.findUser(email)
    if (result.length === 0) {
      return helpers.response(res, null, 401, { email: 'Email dan Password anda salah' })
    }
    const user = result[0]
    const isValid = await bcrypt.compare(password, user.password)

    if (!isValid) {
      return helpers.response(res, null, 401, { email: 'email dan password anda salah' })
    }
    console.log(user);
    delete user.password

    jwt.sign({ email: user.email, role: user.role }, privateKey, { expiresIn: '1h' }, function (err, token) {
      user.token = token
      return helpers.response(res, user, 200, null)
    })
    // JWT lulus pengecekan
  } catch (error) {
    console.log(error)
    return helpers.response(res, null, 500, { message: 'Internal server Error!' })
  }
}
