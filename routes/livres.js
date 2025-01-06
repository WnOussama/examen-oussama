const express = require("express");
const router = express.Router();
const livreController = require("../controller/livreController");

router.post("/create", livreController.affecterLivreABibliotheque);

module.exports = router;
