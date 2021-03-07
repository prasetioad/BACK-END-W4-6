const express = require('express')
const productsController = require('../controllers/products')
const router = express.Router()

router
// //CREAT -> POST
  .post('/', productsController.creatTicket)

// READ -> GET
  .get('/', productsController.getAllTickets)

// //UPDATE -> PUT
  .put('/:id', productsController.updateTicket)

// //DELETE -> DELETE
  .delete('/:id', productsController.deleteTicket)

  .get('/:id', productsController.getTicketById)

// .get('/:name', productsController.getTicketByName)

// .post('/', productsController.creatTicket)

module.exports = router
