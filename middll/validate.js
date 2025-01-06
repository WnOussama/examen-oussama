const yup = require("yup");

async function validateLivres(req, res, next) {
  try {
    const Schema = yup.object().shape({
      titre: yup
        .string()
        .matches(/[A-Z][A-Z][A-Z]/)
        .required(),
      auteur: yup
        .string()
        .email()
        .required(),
      date_publication: yup.date().required(),
    });
    await Schema.validate(req.body);
    next();
  } catch (err) {
    res.status(400).send(err);
  }
}

async function validateresidence(req, res, next) {
  try {
    const Schema = yup.object().shape({
      name: yup
        .string()
        .matches(/[A-Z][A-Z]/)
        .required(),
      surface: yup.number().required(),
      status: yup.boolean().required(),
    });

    await Schema.validate(req.body);
    next();
  } catch (err) {
    res.status(400).send(err);
  }
}
module.exports = { validateLivres };
