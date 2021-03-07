const transactionsModels = require('../models/transactions')

exports.getTransactions = (req, res) => {
  transactionsModels.getTransactions()
    .then((result) => {
      res.json({
        message: 'Get Transactions Successfully!',
        data: result
      })
    })
    .catch((err) => {
      console.log(err)
    })
}

exports.getTransactionById = (req, res) => {
  const idTransaction = req.params.id
  transactionsModels.getTransactionById(idTransaction)
    .then((result) => {
      res.json({
        message: 'Get Transactions by id Successfully!',
        data: result
      })
    })
    .catch((err) => {
      console.log(err)
    })
}

exports.creatTransaction = (req, res) => {
  const { Movie, Date, Time, Category, Count, seats, Price } = req.body
  const data = {
    Movie,
    Date,
    Time,
    Category,
    Count,
    seats,
    Price
  }
  transactionsModels.creatTransaction(data)
    .then((result) => {
      res.status(201).json({
        message: 'Creat Transactions successfully!',
        data: result
      })
    })
    .catch((err) => {
      console.log(err)
    })
}

exports.updateTransaction = (req, res) => {
  const { Movie, Date, Time, Category, Count, seats, Price } = req.body
  const data = {
    Movie,
    Date,
    Time,
    Category,
    Count,
    seats,
    Price
  }
  const idTiket = req.params.id
  transactionsModels.updateTransaction(idTiket, data)
    .then((result) => {
      res.json({
        message: 'Update successfully!',
        data: result
      })
    })
    .catch((err) => {
      console.log(err)
    })
}

exports.deleteTransaction = (req, res) => {
  const idTiket = req.params.id
  transactionsModels.deleteTransaction(idTiket)
    .then((result) => {
      res.json({
        message: 'Delete successfully!',
        data: result
      })
    })
    .catch((err) => {
      console.log(err)
    })
}
