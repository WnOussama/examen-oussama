const Livre = require("../models/livre");
const Bibliotheque = require("../models/bibliotheque");

async function affecterLivreABibliotheque(req, res) {
  try {
    console.log(req.body);
    const user = new Joueur({
      pseudo: req.body.pseudo,
      sante: 100,
      score: 0,
    });
    await user.save();
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
  }
}

module.exports = {
    affecterLivreABibliotheque,
}
