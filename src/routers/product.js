const {Router} = require("express");
const multer = require('multer');
const product = require("../controller/product");
const file = require("../middlewares/file");
const router = Router();
const upload = multer({storage:file("uploads/products")});

router.get("/create", product.create);
router.get("/:id", product.detail);

router.post("/save",[upload.single("img")],product.save)
router.put("/:id", product.update)
router.delete("/:id", product.delete);

module.exports = router;