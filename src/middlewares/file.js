const multer = require('multer');
module.exports = (folder=req.body.folder? req.body.folder : "upload") => multer.diskStorage({
    destination:(req, file, cb) => cb(null, path.resolve(__dirname,"../../public",folder)),
    filename: (req, file, cb) => cb(null, file.fieldname + '-' + Date.now()+ '-' + path.extname(file.originalname))   
})