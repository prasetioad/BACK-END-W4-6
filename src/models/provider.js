const connection = require('../config/db')

const provider = {
  getProvider: () => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM provider ORDER BY id ', (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  },

  getProviderById: (id) => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM provider WHERE id = '${id}' `, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  },

  creatProvider: (data) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO provider SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  },

  updateProvider: (id, data) => {
    return new Promise((resolve, reject) => {
      connection.query('UPDATE provider SET ? WHERE id = ? ', [data, id], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  },

  deleteProvider: (id) => {
    return new Promise((resolve, reject) => {
      connection.query('DELETE FROM provider WHERE id = ?', id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  }

}

module.exports = provider
