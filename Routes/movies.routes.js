const express = require('express');
const router = express.Router();

const movieControlar = require("../Controllar/movies.controllar")

router.get("/movies", movieControlar.getList);

module.exports = router;