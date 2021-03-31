
const connection = require('../config/db')

const users = {
  getUsers: () => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM user ', (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  },

  getUserById: (id) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM user WHERE userid = ?', id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  },

  creatUser: (data) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO user SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  },

  updateUser: (id, data) => {
    return new Promise((resolve, reject) => {
      console.log('masuk methode update user');
      connection.query('UPDATE user SET ? WHERE userid = ?', [data, id], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  },

  deleteUser: (id) => {
    return new Promise((resolve, reject) => {
      connection.query('DELETE FROM user WHERE userid = ?', id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  },

  findUser: (email) => {
    return new Promise((resolve, reject) => {
      connection.query('SELECT * FROM user WHERE email = ?', email, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  }

}

module.exports = users
