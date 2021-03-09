const ticketssModels = require('../models/products')
const db = require('../config/db')

const getTicketByName = (req, res) => {
  const name = req.query.search
  console.log(name + ' ini Get by Name');
  ticketssModels.getTicketsByName(name)
  .then((result)=>{
      res.json({
          message: 'Apakah ini yang anda Cari?',
          data: result
      })
  })
  .catch((err) =>{
      console.log(err);
  })
}


const getAllTickets = (req, res) => {
  const name = req.query.search
  const currentPage = req.query.page || 1;
  const perPage =  req.query.perPage || 5;
  const skip = (currentPage - 1) * perPage

  if (typeof name == 'string') {
    ticketssModels.getTicketsByName(name)
      .then((result) => {
        totalItems = result.length
        res.json({
          message: 'Nama yang mungkin sesuai ....',
          data: result,
        })
      })
      .catch((err) => {
        res.json({
          err : err + 'mohon periksa kembali!'
        })
      })
  } else {
    console.log(currentPage.length);
    ticketssModels.getTickets(skip, perPage)
      .then((result) => {
        totalItems = result.length
        res.json({
          message: 'Apakah ini yang anda cari?',
          data: result,
          currentPage: currentPage,
          totalItems: totalItems,

        })
      })
      .catch((err) => {
        err.json({
          status: err
        })
      })
  }
}

const creatTicket = (req, res) => {
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
  ticketssModels.creatTickets(data)
    .then((result) => {
      res.status(201).json({
        message: 'Creat Successfull',
        data: result
      })
    })
    .catch((err) => {
      console.log(err)
    })
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
      console.log(err)
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
      console.log(err)
    })
}

const getTicketById = (req, res) => {
  const idTicket = req.params.id
  console.log(idTicket + ' get Tiket by ID berjalan')
  ticketssModels.getTicketsById(idTicket)
    .then((result) => {
      res.json({
        message: 'Apakah ini yang anda cari?',
        data: result
      })
    })
    .catch((err) => {
      res.json({
        err : err + 'mohon periksa kembali!',
        status: 400
      })
    })
}


module.exports = {
  creatTicket,
  getAllTickets,
  updateTicket,
  deleteTicket,
  getTicketById,
  getTicketByName,
}
