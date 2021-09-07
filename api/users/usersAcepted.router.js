const router = require('express').Router();
const controller = require('./users.controller')

router.post("/", controller.postUserAcepted)
router.get("/:id", controller.getOneUserAcepted)

module.exports = router;