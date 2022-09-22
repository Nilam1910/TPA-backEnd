const express = require("express")
const router = express.Router()

const ctrls = require("../controllers")

router.get("/", ctrls.pins.index)
module.exports = router;

// router.post('/', ctrls.holidays.create); 

