const {Router} = require("express");
const user = require("../controller/user");
const router = Router();

router.get("/register", user.register);
router.get("/login", user.login);
router.get("/contact", user.contact);

module.exports = router;