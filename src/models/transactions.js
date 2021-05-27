const connection = require('../config/db')

const transactions = {
  getTransactions: () => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM transaction ORDER BY id DESC', (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  },

  getTransactionById: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM transaction WHERE transaction_id = '${id}' `, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  },

  creatTransaction: (data) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO transaction SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  },

  updateTransaction: (id, data) => {
    return new Promise((resolve, reject) => {
      connection.query('UPDATE transaction SET ? WHERE id = ? ', [data, id], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  },

  deleteTransaction: (id) => {
    return new Promise((resolve, reject) => {
      connection.query('DELETE FROM transaction WHERE id = ?', id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  }

}

module.exports = transactions
