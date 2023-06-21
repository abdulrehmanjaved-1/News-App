const mongoose = require("mongoose");
const Schemamodel = require("../model/scehma1");

const firstfunction = (async) => (req, res) => {
  res.send("hello im first get in routers");
  try {
    const body = req.body;
    // Assuming you have a User model defined using Mongoose
    const users = Schemamodel.create({
      username: body.username,
      password: body.password,
    });
    console.log("user", users);

    return res.status(201).json(users);
  } catch (error) {
    console.error("Error creating user:", error);
    return res.status(500).json({ error: "Failed to create user" });
  }
};
async function secondfunction(req, res) {
  try {
    // res.send("helo g1");
    const users = await Schemamodel.find();
    // res.status(200).json(users);
    res.send(users);
  } catch (error) {
    console.error("Error retrieving users:", error);
    res.status(500).json({ error: "Failed to retrieve users" });
  }
}
async function deleteall(req, res) {
  try {
    await Schemamodel.deleteMany({});
    res.status(200).json({ message: "Users deleted successfully" });
  } catch (error) {
    console.error("Deletion not successful", error);
    res.status(500).json({ error: "Failed to delete users" });
  }
}

async function postform(req, res) {
  try {
    const { username, password } = req.body;
    console.log("Received username:", username);
    console.log("Received password:", password);
    const newDocument = new Schemamodel({
      username: username,
      password: password,
    });
    await newDocument.save();
     
    res.status(200).json({ message: "User created successfully" });
  } catch (error) {
    console.error("Checker not working:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}

module.exports = { firstfunction, secondfunction, postform, deleteall };
