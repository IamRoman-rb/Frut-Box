const {Router} = require("express");
const main = require("../controller/main");
const router = Router();

router.get("/", main.index);
module.exports = router;