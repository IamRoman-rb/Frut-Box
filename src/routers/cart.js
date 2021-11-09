const {Router} = require("express");
const cart = require("../controller/cart");
const router = Router();

router.get("/", cart.index);

module.exports = router;