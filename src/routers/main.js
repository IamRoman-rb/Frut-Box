const {Router} = require("express");
const main = require("../controller/main");
const router = Router();

router.get("/", main.index);
router.get("/contact", main.contact);
module.exports = router;