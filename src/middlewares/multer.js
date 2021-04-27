const multer = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '-' + file.originalname)
  }

})
const upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    console.log('Filter file berjalan ... ')
    console.log('isi req adalah : ', file)
    if (
      file.mimetype == 'image/png' ||
        file.mimetype == 'image/jpg' ||
        file.mimetype == 'image/jpeg'
    ) {
      cb(null, true)
    } else {
      cb(null, false)
      return cb(new Error('Only .png, .jpg and .jpeg format allowed!'))
    }
  },
  limits: { fileSize: 1000000}

})

module.exports = {
  upload
}
