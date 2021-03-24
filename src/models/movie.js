const connection = require('../config/db')

const movie = {
  getMovies: (skip, perPage) => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT * FROM movie ORDER BY createdAt DESC LIMIT ${skip + ',' + perPage}`, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  },

  creatMovie: (data) => {
    return new Promise((resolve, reject) => {
      connection.query('INSERT INTO movie SET ?', data, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  },

  updateMovie: (id, data) => {
    return new Promise((resolve, reject) => {
      connection.query('UPDATE movie SET ? WHERE id = ?', [data, id], (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  },

  deleteMovie: (id) => {
    return new Promise((resolve, reject) => {
      connection.query('DELETE from movie WHERE id = ?', id, (err, result) => {
        if (!err) {
          resolve(result)
        } else {
          reject(err)
        }
      })
    })
  },

  getMovieById: (id) => {
    return new Promise((resolve, reject) => {
      if (id % 2 === 1 || id % 2 === 0) {
        connection.query('SELECT * FROM movie WHERE movie.id = ?', id, (err, result) => {
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
        connection.query(`SELECT movie.*, category.name AS nameCategory FROM movie INNER JOIN category ON movie.idCategory=category.id WHERE movie.name LIKE '%${id}%'`, (err, result) => {
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

  getMovieByName: (name) => {
    return new Promise((resolve, reject) => {
      connection.query(`SELECT movie.*, category.name AS nameCategory FROM movie INNER JOIN category ON movie.idCategory=category.id WHERE movie.name LIKE '${'%' + name + '%'}'`, (err, result) => {
        console.log('getMovieByName')
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

module.exports = movie
