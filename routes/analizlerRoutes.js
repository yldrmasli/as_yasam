const express = require('express');
const router = express.Router();
const { getAnalizlerPage, analyzeData, getChartData } = require('../controllers/analizlerController');

// Analizler rotası
router.get('/', getAnalizlerPage);

router.post('/analyze', analyzeData);

router.get("/chart-data", getChartData);

module.exports = router;
