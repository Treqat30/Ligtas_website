const {send} = require ("../controllers/cont");

const express = require('express');

const router = express.Router();

router.post('/send', send);


module.exports= router;