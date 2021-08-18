const router = require('express').Router();
const controller = require('./users.controller')

router.get("/", controller.getUsers)
router.get("/:id", controller.getOneUser)
router.post("/", controller.postOneUser)
router.put('/:id', controller.putUser)
router.patch('/:id', controller.patchOneUser)
router.delete('/:id', controller.deleteUSer)

module.exports = router;