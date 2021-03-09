const express = require('express')
const productsController = require('../controllers/products')
const router = express.Router()

router

  .get('/tikets?search=', productsController.getTicketByName)

// //CREAT -> POST
  .post('/', productsController.creatTicket)

// READ -> GET
  .get('/', productsController.getAllTickets)

// //UPDATE -> PUT
  .put('/:id', productsController.updateTicket)

// //DELETE -> DELETE
  .delete('/:id', productsController.deleteTicket)

  .get('/:id', productsController.getTicketById)

  

// .post('/', productsController.creatTicket)

module.exports = router
