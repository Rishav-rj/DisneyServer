const express = require('express');
const router = express.Router();

const userControllar = require('../Controllar/user.controllar')

router.post("/", userControllar.getUser);
router.post("/add", userControllar.createUser);

module.exports = router;