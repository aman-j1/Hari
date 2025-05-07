const multer = require('multer');

var Uploader = multer({
    storage: multer.diskStorage({}),
    limits: { fileSize: 500000 }
})

module.exports = Uploader;