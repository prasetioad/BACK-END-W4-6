const connection = require('../config/db')
const { search } = require('../routers/products')

const tickets = {
  getTickets: (skip, perPage) => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT tiket.*, category.name AS nameCategory FROM tiket INNER JOIN category ON tiket.idCategory=category.id ORDER BY createdAt DESC LIMIT ${skip + ',' + perPage}`, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  },

  creatTickets: (data) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO tiket SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  },

  updateTicket: (id, data) => {
    return new Promise((resolve, reject) => {
      connection.query('UPDATE tiket SET ? WHERE id = ?', [data, id], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  },

  deleteTicket: (id) => {
    return new Promise((resolve, reject) => {
      connection.query('DELETE from tiket WHERE id = ?', id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  },

  getTicketsById: (id) => {
    return new Promise((resolve, reject) => {
      if (id % 2 === 1 || id % 2 === 0) {
        connection.query('SELECT tiket.*, category.name AS nameCategory FROM tiket INNER JOIN category ON tiket.idCategory=category.id WHERE tiket.id = ?', id, (err, result) => {
          if (!err) {
            if (result.length < 1) {
              reject(new Error('Maaf data tidak ada!'))
            } else {
              console.log('Ketemu!')
              resolve(result)
            }
          } else {
            reject(err)
          }
        })
      } else {
        connection.query(`SELECT tiket.*, category.name AS nameCategory FROM tiket INNER JOIN category ON tiket.idCategory=category.id WHERE tiket.name LIKE '%${id}%'`, (err, result) => {
          console.log(id)
          if (!err) {
            resolve(result)
          } else {
            reject(err)
          }
        })
      }
    })
  },

  getTicketsByName: (name) => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT tiket.*, category.name AS nameCategory FROM tiket INNER JOIN category ON tiket.idCategory=category.id WHERE tiket.name LIKE '${'%' + name + '%'}'`, (err, result) => {
        console.log('getTicketsByName')
        if (!err) {
          if (result.length < 1) {
            reject(new Error('Maaf data tidak ada!'))
          } else {
            console.log('Get Tiket Byname Berjalan')
            resolve(result)
          }
        } else {
          reject(err)
        }
      })
    })
  }

}

module.exports = tickets
