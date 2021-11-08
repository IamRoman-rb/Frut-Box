const {Router} = require("express");
const product = require("../controller/product");
const router = Router();

router.get("/detail", product.detail);
router.get("/cart", product.cart);
router.get("/create", product.create);

module.exports = router;