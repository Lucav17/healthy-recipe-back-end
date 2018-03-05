// Importing Node packages required for schema
const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const EmailSchema = new Schema({
  email: { type: String }
});

module.exports = mongoose.model("Email", EmailSchema);
