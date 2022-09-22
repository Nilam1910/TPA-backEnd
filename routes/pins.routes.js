const express = require("express")
const router = express.Router()
router.get("/", ctrls.pins.index)
module.exports = router;