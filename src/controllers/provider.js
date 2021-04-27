const providersModels = require('../models/provider')
const db = require('../config/db')
const helpers = require('../helpers/helper')
const redis = require("redis");
const client = redis.createClient(6379);

exports.getProvider = (req, res) =>{
    providersModels.getProvider()
    .then((result) => {
      const resultProduct = result
      client.setex("getProducts", 60*60*12, JSON.stringify(resultProduct))
      totalItems = result.length
      helpers.response(res, resultProduct, 200)
    })
    .catch((err) => {
      console.log(err)
    })
}

exports.getProviderById = (req, res) => {
    const idProvider = req.params.id
    providersModels.getProviderById(idProvider)
      .then((result) => {
        res.json({
          message: 'Get providers by id Successfully!',
          data: result
        })
      })
      .catch((err) => {
        console.log(err)
      })
  }


  exports.creatProvider = (req, res) => {
    const { name, place, location, date, time1, time2, time3, time4, time5, time6, time7} = req.body
    const data = {
        name,
        location,
        place,
        date,
        time1,
        time2,
        time3,
        time4,
        time5,
        time6,
        time7,
    }
    console.log('data Masuk Provider', data);
    // providersModels.creatProvider(data)
    //   .then((result) => {
    //     res.status(201).json({
    //       message: 'Creat providers successfully!',
    //       data: result
    //     })
    //   })
    //   .catch((err) => {
    //     console.log(err)
    //   })
  }

  exports.updateProvider= (req, res) => {
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
    providersModels.updateProvider(idTiket, data)
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
  
  exports.deleteProvider= (req, res) => {
    const idTiket = req.params.id
    providersModels.deleteProvider(idProvider)
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
  