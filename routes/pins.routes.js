const express = require("express")
const router = express.Router()

const ctrls = require("../controllers")

router.get("/", ctrls.pins.index)
router.post("/", ctrls.pins.create)
router.delete("/:id", ctrls.pins.destroy)
router.put("/:id", ctrls.pins.update)
module.exports = router;


