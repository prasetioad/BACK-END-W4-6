const express = require('express')
const transactionControllers = require('../controllers/transactions')
const router = express.Router()
const auth = require('../middlewares/auth')


router
  .get('/',auth.verivyAccess, transactionControllers.getTransactions)
  .get('/:id',  auth.verivyAccess, transactionControllers.getTransactionById)
  .post('/',auth.verivyAccess, transactionControllers.creatTransaction)
  .put('/:id',auth.verivyAccess, transactionControllers.updateTransaction)
  .delete('/:id',auth.verivyAccess, transactionControllers.deleteTransaction)

module.exports = router
