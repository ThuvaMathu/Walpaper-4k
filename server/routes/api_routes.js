const express = require("express");

const imgController = require("../controllers/img_controller");
const router = express.Router();

router.post("/searchimage", imgController.getImages);

module.exports = router;
