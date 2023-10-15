const express = require("express")
const router = express.Router()
const {gain, create, upadate, remove} = require("../controler/products")


router.get("/",gain)
router.post("/",create)
router.put("/",upadate)
router.delete("/",remove)

module.exports = router