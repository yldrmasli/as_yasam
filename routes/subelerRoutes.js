const express = require('express');
const router = express.Router();
const { renderSubelerPage, getSubelerData } = require('../controllers/subelerController');

// Sayfayı render eden GET rotası
router.get('/', renderSubelerPage);

// Verileri dinamik olarak getiren POST rotası
router.post('/veriler', getSubelerData);

module.exports = router;
