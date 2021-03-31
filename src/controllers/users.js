const usersModels = require('../models/users')
const privateKey = process.env.PRIVATEKEY
const helpers = require('../helpers/helper')
const { v4: uuidv4 } = require('uuid')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const hash = require('../helpers/hash')
const { sendMail } = require('../helpers/email')
const { sendForgotMail }= require('../helpers/sendForgotMail')

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
  const {userid, email, password } = req.body
  console.log(email)
  const data = {
    userid,
    email,
    password
  }
  console.log(data)
  usersModels.creatUser(data)
    .then((result) => {
      return helpers.response(res, result, 200, null)
    })
    .catch((err)=>{
      console.log(err);
    })
}

exports.updateUser = (req, res) => {
  const { firstName, lastName, email, phone_number } = req.body
  const image = req.filename
  console.log(req);
  // if (req.file.size > 200000) {
  //   return helpers.response(res, null, 401, { gambar: 'Gambar terlalu Besar!' })
  // }
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
      return helpers.response(res, result, 201, null)
    })
    .catch((err) => {
      return helpers.response(res, result, 401, {error : err})
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
    jwt.sign({ email: email }, privateKey, { expiresIn: '1h' }, function (err, token) {
      console.log('Mengirim Emaill....');
      return sendMail(data.userid, email, token, data.password)
    })
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
    console.log(password, user.password);
    if (!isValid) {
      return helpers.response(res, null, 401, { email: 'email dan password anda salah' })
    }
    console.log(user);
    delete user.password

    jwt.sign({id: user.userid, email: user.email, role: user.role }, privateKey, { expiresIn: '1h' }, function (err, token) {
      user.token = token
      return helpers.response(res, token, 200, null)
    })
    // JWT lulus pengecekan
  } catch (error) {
    console.log(error)
    return helpers.response(res, null, 500, { message: 'Internal server Error!' })
  }
}

exports.forgotCheck = async(req, res) => {
  try {
    console.log('forgot berjalan', req.body);
    const {email} = req.body
    const process = await usersModels.findUser(email)
    console.log('berhasil melewati await');
    if(process.length == 0){
      return helpers.response(res, null, 401, {message: 'Email tidak ada!'})
    }
    console.log('menuju pembuatan jwt token');
    const user = process[0]
    jwt.sign({id: user.userid, email: user.email}, privateKey, { expiresIn: '1h' }, function (err, token) {
      console.log('berhasil membuat token');
      user.token = sendForgotMail(token, user.userid, email)
      console.log('berhasil mengirim Email');
      return helpers.response(res, result, 201, null)
    })
    return helpers.response(res, result, 401, null)
  } catch (err) {
    return helpers.response(res, null, 500, { err: 'Internal Serve Error'   })
  }
}

exports.forgotUpdate= async (req, res) => {
  console.log(req.body.password);
  const {email, password} = req.body
  const data ={ password : await hash.hashPassword(password)}
  console.log('forgot update berjalan',data);
  const idUser = req.params.id
  usersModels.updateUser(idUser, data)
    .then((result) => { 
      return helpers.response(res, result, 201, null)
    })
    .catch((err) => {
      return helpers.response(res, result, 401, {error : err})
    })
}
