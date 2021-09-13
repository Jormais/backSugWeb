const router = require('express').Router();
const controller = require('./email.controller');

router.post("/", controller.sendEmail);

module.exports = router;