// Importing Node packages required for schema
const mongoose = require("mongoose"),
  Schema = mongoose.Schema;

const CategorySchema = new Schema(
  {
    categoryName: { type: String },
    categoryRef: [{ type: String }]
  }
);

module.exports = mongoose.model("Category", CategorySchema);
