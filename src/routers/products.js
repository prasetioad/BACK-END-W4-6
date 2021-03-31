const express = require('express')
const productsController = require('../controllers/products')
const router = express.Router()
const auth = require('../middlewares/auth')
const { upload } = require('../middlewares/multer')
const { cacheAllProduct, clearAllProduct } = require('../middlewares/redis')

router

  .get('/tikets?search=',cacheAllProduct, productsController.getTicketByName)
  .post('/', upload.single('image'), clearAllProduct, productsController.creatTicket)
  .get('/',cacheAllProduct, productsController.getAllTickets)
  .put('/:id',auth.verivyAccess, clearAllProduct, productsController.updateTicket)
  .delete('/:id',auth.verivyAccess, clearAllProduct, productsController.deleteTicket)
  .get('/:id', cacheAllProduct, productsController.getTicketById)
// .post('/', productsController.creatTicket)

module.exports = router
