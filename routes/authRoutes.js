const express = require("express");
const router = express.Router();
const authController = require("../controllers/authController");

router.get("/login", (req, res) => res.render("login", { error: req.query.error }));
router.post("/login", authController.login);
router.get("/register", authController.getRegisterPage);
router.post("/register", authController.register);
router.post("/logout", authController.logout);

module.exports = router;
