const bcrypt = require('bcryptjs')

const hashPassword = (password) => {
  return new Promise((resolve, reject) => {
    bcrypt.genSalt(10, function (err, salt) {
      console.log('hash  1 berjalan ...')
      bcrypt.hash(password, salt, async function (err, hash) {
        console.log('hash 2 berjalan ...')
        if (!err) {
          resolve(hash)
        } else {
          reject(err)
        }
      })
    })
  })
}

module.exports = {
  hashPassword
}
