const ticketssModels = require('../models/products')
const db = require('../config/db')
const helpers = require('../helpers/helper')
const redis = require("redis");
const client = redis.createClient(6379);



const getTicketByName = (req, res) => {
  const name = req.query.search
  console.log(name + ' ini Get by Name')
  ticketssModels.getTicketsByName(name)
    .then((result) => {
      res.json({
        message: 'Apakah ini yang anda Cari?',
        data: result
      })
    })
    .catch((err) => {
      console.log(err)
    })
}

const getAllTickets = (req, res) => {
  const name = req.query.search
  const currentPage = req.query.page || 1
  const perPage = req.query.per_Page || 5
  const skip = (currentPage - 1) * perPage
  console.log(name + ' Query Search berjalan')

  if (typeof name === 'string') {
    ticketssModels.getTicketsByName(name)
      .then((result) => {
        totalItems = result.length
        if (result.length > 0) {
          res.json({
            message: 'Nama yang mungkin sesuai ....',
            data: result[0]
          })
        }
      })
      .catch((err) => {
        return helpers.response(res, null, 401, { err: err })
      })
  } else {
    console.log(currentPage.length, 'Mengunakan')
    ticketssModels.getTickets(skip, perPage)
      .then((result) => {
        res.status(201).json({
        message: 'Get Successfull',
        data: result
      })
        
      })
      .catch((err) => {
        return helpers.response(res, null, 401, { err: err })
      })
  }
}

const creatTicket = (req, res) => {
  const { name, release_date, duration, category, director, synopsis, cast } = req.body
  const image = req
  // console.log(req.file.size)
  // if (req.file.size > 200000) {
  //   return helpers.response(res, null, 401, { gambar: 'Gambar terlalu Besar!' })
  // }
  const data = {
    name,
    release_date,
    duration,
    director,
    synopsis,
    category,
    cast,
    image: `http://localhost:5400/image/${image}`
  }
  console.log('gambar masuk tiket', req);
  // ticketssModels.creatTickets(data)
  //   .then((result) => {
  //     res.status(201).json({
  //       message: 'Creat Successfull',
  //       data: result
  //     })
  //   })
  //   .catch((err) => {
  //     return helpers.response(res, null, 401, { err: err })
  //   })
}

// //

const updateTicket = (req, res) => {
  const idTicket = req.params.id
  const { name, date, time, row, room, seat, price } = req.body
  const data = {
    name,
    date,
    time,
    row,
    room,
    seat,
    price
  }
  ticketssModels.updateTicket(idTicket, data)
    .then((result) => {
      res.json({
        message: 'Update Success!',
        data: result
      })
    })
    .catch((err) => {
      return helpers.response(res, null, 401, { err: err })
    })
}

const deleteTicket = (req, res) => {
  const idTicket = req.params.id
  ticketssModels.deleteTicket(idTicket)
    .then((result) => {
      res.json({
        message: 'Delete success!',
        data: result
      })
    })
    .catch((err) => {
      return helpers.response(res, null, 401, { err: err })
    })
}

const getTicketById = (req, res) => {
  console.log('Get By ID BErjalan');
  const idTicket = req.params.id
  console.log(idTicket + ' get Tiket by ID berjalan')
  ticketssModels.getTicketsById(idTicket)
    .then((result) => {
        const resultProduct = result
        client.setex(`product_${idTicket}`, 60*60*12, JSON.stringify(resultProduct))
        totalItems = result.length
        helpers.response(res, resultProduct, 200)
    })
    .catch((err) => {
      return helpers.response(res, null, 401, { err: err })
    })
}

module.exports = {
  creatTicket,
  getAllTickets,
  updateTicket,
  deleteTicket,
  getTicketById,
  getTicketByName
}
