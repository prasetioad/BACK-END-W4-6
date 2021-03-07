const express = require('express')
const transactionControllers = require('../controllers/transactions')
const router = express.Router()

router
  .get('/', transactionControllers.getTransactions)
  .get('/:id', transactionControllers.getTransactionById)
  .post('/', transactionControllers.creatTransaction)
  .put('/:id', transactionControllers.updateTransaction)
  .delete('/:id', transactionControllers.deleteTransaction)

module.exports = router
