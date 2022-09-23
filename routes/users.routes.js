const express = require("express")
const router = express.Router()

const ctrls = require("../controllers")

router.post("/signout", ctrls.users.signout)
router.post("/register", ctrls.users.register)
router.post("/signin", ctrls.users.signin)
module.exports = router;
