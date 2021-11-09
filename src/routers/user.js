const {Router} = require("express");
const user = require("../controller/user");
const hash = require("../middleware/hash");
const router = Router();

router.get("/register", user.register);
router.get("/login", user.login);


router.post("/save",[hash()], user.save);
router.post("/access", user.access);

module.exports = router;