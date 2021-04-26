const express = require('express');
const defaultController = require('../controllers/default');
const router = express.Router();

// /admin/add-product => GET
router.get('/', defaultController.getDefault);

module.exports = router;
