const express = require('express');
const apiController = require('../controllers/api');
const router = express.Router();

// /admin/add-product => GET
router.get('/hello', apiController.getHello);

module.exports = router;
