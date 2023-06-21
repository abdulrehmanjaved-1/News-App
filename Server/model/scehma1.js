const mongoose = require("mongoose");
const { Schema } = mongoose;

const userSchema = new Schema({
  username: String,
  password: String,
});

const Schemamodel = mongoose.model("collection3", userSchema);

module.exports = Schemamodel;
