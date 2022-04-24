// fonctions d'express validator
const { check, validationResult } = require("express-validator");

// Validation et sanitisation des données contre les injections NoSQL
const stringValidate = [
  check("name", "a name is required")
    .isAlphanumeric()
    .bail()
    .notEmpty()
    .bail()
    .isString()
    .bail()
    .escape(),
  check("company", "a company's name is required")
    .isAlphanumeric()
    .bail()
    .notEmpty()
    .bail()
    .isString()
    .bail()
    .escape(),
  check("siren", "a siren is required")
    .isNumeric()
    .bail()
    .notEmpty()
    .bail()
    .escape(),
  check("email", "an email is required")
    .isEmail()
    .bail()
    .notEmpty()
    .bail()
    .isString()
    .bail()
    .escape(),
];

module.exports = stringValidate;
