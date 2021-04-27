const express = require('express')
const transactionControllers = require('../controllers/transactions')
const router = express.Router()
const auth = require('../middlewares/auth')


router
  .get('/', transactionControllers.getTransactions)
  .get('/:id',  auth.verivyAccess, transactionControllers.getTransactionById)
  .post('/', transactionControllers.creatTransaction)
  .put('/:id',auth.verivyAccess, transactionControllers.updateTransaction)
  .delete('/:id',auth.verivyAccess, transactionControllers.deleteTransaction)

module.exports = router
