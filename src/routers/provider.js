const express = require('express')
const providersController = require('../controllers/provider')
const router = express.Router()
const auth = require('../middlewares/auth')
const { upload } = require('../middlewares/multer')
const { cacheAllProduct, clearAllProduct } = require('../middlewares/redis')

router

  .post('/', providersController.creatProvider)
  .get('/', providersController.getProvider)
  .put('/:id',  providersController.updateProvider)
  .delete('/:id',  providersController.deleteProvider)
  .get('/:id',  providersController.getProviderById)
  .post('/get', providersController.getByPost)

module.exports = router