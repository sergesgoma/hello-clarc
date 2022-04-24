const mongoose = require("mongoose");

const formSchema = new mongoose.Schema({
  email: {
    type: String,
    trim: true,
  },
  name: {
    type: String,
    trim: true,
  },

  company: {
    type: String,
    trim: true,
  },
  siren: { type: Number, trim: true },
  seniority: { type: String, trim: true },
  employeeNumber: { type: String, trim: true }
});

module.exports = mongoose.model("Form", formSchema);
