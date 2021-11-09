const bcrypt = require('bcrypt');
module.exports= (req,res,next) => {
    req.body.password = bcrypt.hashSync(req.body.password,10)
    next();
}