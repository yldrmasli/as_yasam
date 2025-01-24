const express = require("express");
const router = express.Router();
const grafiklerController = require("../controllers/grafiklerController");

// Ana sayfa rotası
router.get("/", grafiklerController.getGrafikPage);
router.get("/grafik-veri", grafiklerController.getNufusData);
router.get("/gelismislik-skor", grafiklerController.getGelisScoreData);
router.get("/saglik-veri", grafiklerController.getSaglikData);
router.get("/yasli-orani", grafiklerController.getYasliOraniData);


module.exports = router;
