const express = require('express')
const transactionControllers = require('../controllers/transactions')
const router = express.Router()
const auth = require('../middlewares/auth')


router
  .get('/',auth.verivyAccess, transactionControllers.getTransactions)
  .get('/:id',  auth.verivyAccess, transactionControllers.getTransactionById)
  .post('/', transactionControllers.creatTransaction)
  .put('/:id', transactionControllers.updateTransaction)
  .delete('/:id', transactionControllers.deleteTransaction)

module.exports = router
