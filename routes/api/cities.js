const express = require("express");
const router = express.Router();
const citiesCtrl = require("../../controllers/api/cities");
// const ensureLoggedIn = require("../../config/ensureLoggedIn");

router.post("/", citiesCtrl.createCity);
router.get("/", citiesCtrl.index);

module.exports = router;
