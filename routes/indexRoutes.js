const express = require('express');
const router = express.Router();
const indexController = require('../controllers/indexController');

// Ana sayfa rotası
router.get('/', indexController.getIndexPage);

// Dashboard verilerini döndüren API endpoint
router.get('/api/dashboard', indexController.getDashboardData);
router.get('/api/ilce/:ilce', indexController.getIlceData);
module.exports = router;
