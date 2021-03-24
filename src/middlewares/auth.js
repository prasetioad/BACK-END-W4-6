const jwt = require('jsonwebtoken')
const helpers = require('../helpers/helper')
const privateKey = process.env.PRIVATEKEY

const verivyAccess = (req, res, next) => {
  const auth = req.headers.authorization
  if (!auth) {
    return helpers.response(res, null, 401, {
      message: 'Invalid Token'
    })
  }
  const token = auth.split(' ')
  jwt.verify(token[1], privateKey, function (err, decoded) {
    if (err) {
      if (err.name === 'TokenExpiredError') {
        return helpers.response(res, null, 401, {
          message: 'TOKEN expired'
        })
      } else if (err.name === 'JsonWebTokenError') {
        return helpers.response(res, null, 401, {
          message: 'invalid TOKEN'
        })
      } else if (err.name === 'NotBeforeError') {
        return helpers.response(res, null, 401, {
          message: 'TOKEN not active'
        })
      }
    } else {
      console.log('ini adalah decode', decoded)
      next(decoded)
    }
  })
}

module.exports = {
  verivyAccess
}
