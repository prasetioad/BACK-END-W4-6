const express = require('express')
const movieController = require('../controllers/movie')
const router = express.Router()

router

  .get('/movie?search=', movieController.getMovieByName)

// //CREAT -> POST
  .post('/', movieController.creatMovie)

// READ -> GET
  .get('/', movieController.getAllMovies)

// //UPDATE -> PUT
  .put('/:id', movieController.updateMovie)

// //DELETE -> DELETE
  .delete('/:id', movieController.deleteMovie)

  .get('/:id', movieController.getMovieById)

// .post('/', productsController.creatTicket)

module.exports = router
console.log('halaman Movie Routes')
