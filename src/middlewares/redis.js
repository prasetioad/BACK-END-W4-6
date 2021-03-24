const redis = require('redis')
const client = redis.createClient(6379)
const helpers = require('../helpers/helper')

const cacheAllProduct = (req, res, next) =>{
    client.get('getProducts', (err, data) =>{
        console.log(data);
        if( data !== null){
            const result = JSON.parse(data)
            console.log('Redis Work Success');
            return helpers.response(res, result, 200, null)
        }else{
            console.log('Just Doing Next!');
            next()
        }
    })
}

const clearAllProduct = (req, res, next) =>{
    client.del('getProducts')
    next()
}

module.exports ={
    cacheAllProduct,
    clearAllProduct
}