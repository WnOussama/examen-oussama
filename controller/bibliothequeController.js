const Livre = require("../models/livre");
const Bibliotheque = require("../models/bibliotheque");

async function add(req, res) {
  try {
    console.log(req.body);
    const bibliotheque = new Bibliotheque({
      nom: req.body.nom,
      nbr_livre: req.body.nbr_livre,
      adresse: req.body.adresse,
    });
    await bibliotheque.save();
    res.status(200).json(bibliotheque);
  } catch (err) {
    console.log(err);
  }
}

async function showBibliotheque(req, res) {
  try {
    const bibliotheque = await Bibliotheque.find();
    res.status(200).json(bibliotheque);
  } catch (err) {
    console.log(err);
  }
}

async function showByid(req, res) {
  try {
    const bibliotheque = await Bibliotheque.findById(req.params.id);
    res.status(200).json(bibliotheque);
  } catch (err) {
    console.log(err);
  }
}

async function deleteBibliotheque(req, res) {
  try {
    await Bibliotheque.findByIdAndDelete(req.params.id);
    res.status(200).send("deleted");
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
  add,
  showBibliotheque,
  showByid,
  deleteBibliotheque,
};


