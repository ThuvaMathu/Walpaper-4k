const express = require("express");

const imgController = require("../controllers/img_controller");
const emailController = require("../controllers/email_controller");
const router = express.Router();

router.post("/searchimage", imgController.getImages);
router.post("/send", emailController.sendMail);

module.exports = router;
