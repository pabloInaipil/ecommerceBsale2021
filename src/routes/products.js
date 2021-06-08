const express = require('express');
const router = express.Router();

const productsController = require('../controllers/productsControllers');

router.get('/', productsController.list);


module.exports = router;