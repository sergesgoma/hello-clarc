const Form = require("../models/Form");

const { check, validationResult } = require("express-validator");

const mainController = {
  homePage: async (req, res) => {
    res.render("index");
  },
  formPage: async (req, res) => {
    res.render("form");
  },
  formPagePost: async (req, res) => {
    // const errors = validationResult(req);
    // if (!errors.isEmpty()) {
    //   return res.status(400).json({ errors: errors.array() });
    // } else {
    let form = new Form({
      email: req.body.email,
      name: req.body.name,
      company: req.body.company,
      siren: req.body.siren,
      seniority: req.body.seniority,
      employeeNumber: req.body.employeeNumber,
    });
    form.save();
    res.redirect('/');
    // }
  },
};

module.exports = mainController;
