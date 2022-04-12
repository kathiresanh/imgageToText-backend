
const express = require("express")
const {upload,uploadImage} = require("../controller/userController.js")


const router = express.Router();

router.post("/upload",uploadImage,upload)

module.exports = router;