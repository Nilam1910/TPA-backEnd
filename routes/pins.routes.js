const express = require("express")
const router = express.Router()

const ctrls= require("../controllers")
router.get("/pins", ctrls.pins.index)
module.exports = router;