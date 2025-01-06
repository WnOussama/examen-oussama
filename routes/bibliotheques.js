const express = require("express");
const router = express.Router();
const bibliothequeController = require("../controller/bibliothequeController");

router.post("/create", bibliothequeController.add);
router.get("/list", bibliothequeController.showBibliotheque);
router.get("/details/:id", bibliothequeController.showById);
router.delete("/delete/:id", bibliothequeController.delete);

module.exports = router;

