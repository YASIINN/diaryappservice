const express = require('express')
const router = express.Router();
const dairController = require('../../controllers/dairController')
const dairService = require('../../business/dair/index')
const checkToken = require('../../middleware/auth')
router.post("/", checkToken, dairController.index);
router.post("/delete", checkToken, [...dairService.validation('destroy')], dairController.destroy);
router.post("/create", checkToken, [...dairService.validation("create")], dairController.store);
router.post("/:dairId",  [...dairService.validation("show")], dairController.show);
router.post("/update", checkToken, dairController.update);

module.exports = router;
