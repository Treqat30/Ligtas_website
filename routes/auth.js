const authController = require ("../controllers/auth");

const express = require('express');

const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);
// router.get("/logout", authController.logout);


module.exports= router;
