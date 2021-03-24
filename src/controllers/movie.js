const moviessModels = require('../models/movie')
const db = require('../config/db')

const getMovieByName = (req, res) => {
  const name = req.query.search
  console.log(name + ' ini Get by Name')
  moviessModels.getMoviesByName(name)
    .then((result) => {
      res.json({
        message: 'Apakah ini yang anda Cari?',
        data: result
      })
    })
    .catch((err) => {
      console.log(err)
    })
}

const getAllMovies = (req, res) => {
  const name = req.query.search
  const currentPage = req.query.page || 1
  const perPage = req.query.per_Page || 5
  const skip = (currentPage - 1) * perPage
  console.log(name + ' Query Search berjalan')

  if (typeof name === 'string') {
    moviessModels.getMovieByName(name)
      .then((result) => {
        totalItems = result.length
        if (result.length > 0) {
          res.json({
            message: 'Nama yang mungkin sesuai ....',
            data: result[0]
          })
        }
      })
      .catch((err) => {
        res.json({
          err: err + 'mohon periksa kembali!'
        })
      })
  } else {
    console.log(currentPage.length)
    moviessModels.getMovies(skip, perPage)
      .then((result) => {
        totalItems = result.length
        res.json({
          message: 'Apakah ini yang anda cari?',
          data: result,
          currentPage: currentPage,
          totalItems: totalItems

        })
      })
      .catch((err) => {
        err.json({
          status: err
        })
      })
  }
}

const creatMovie = (req, res) => {
  const { name, date, time, row, room, seat, price } = req.body
  const data = {
    name,
    date,
    time,
    row,
    room,
    seat,
    price
  }
  moviessModels.creatMovie(data)
    .then((result) => {
      res.status(201).json({
        message: 'Creat Successfull',
        data: result
      })
    })
    .catch((err) => {
      console.log(err)
    })
}

// //

const updateMovie = (req, res) => {
  const idMovie = req.params.id
  const { name, date, time, row, room, seat, price } = req.body
  const data = {
    name,
    date,
    time,
    row,
    room,
    seat,
    price
  }
  moviessModels.updateMovie(idMovie, data)
    .then((result) => {
      res.json({
        message: 'Update Success!',
        data: result
      })
    })
    .catch((err) => {
      console.log(err)
    })
}

const deleteMovie = (req, res) => {
  const idMovie = req.params.id
  moviessModels.deleteMovie(idMovie)
    .then((result) => {
      res.json({
        message: 'Delete success!',
        data: result
      })
    })
    .catch((err) => {
      console.log(err)
    })
}

const getMovieById = (req, res) => {
  const idMovie = req.params.id
  console.log(idMovie + ' get Tiket by ID berjalan')
  moviessModels.getMovieById(idMovie)
    .then((result) => {
      res.json({
        message: 'Apakah ini yang anda cari?',
        data: result
      })
    })
    .catch((err) => {
      res.json({
        err: err + 'mohon periksa kembali!',
        status: 400
      })
    })
}

module.exports = {
  creatMovie,
  getAllMovies,
  updateMovie,
  deleteMovie,
  getMovieById,
  getMovieByName
}
