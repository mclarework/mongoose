const express = require("express");
const { User } = require("../models/user");
const router = new express.Router();
const jwt = require("jsonwebtoken");

router.post("/users", async (req, res) => {
  
  const user = new User(req.body);
  try {
    // const token = await user.generateAuthToken();
    await user.save();
    res.status(201).send(user);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.post("/users/login", async (req, res) => {
  try {
    const user = await User.findByCredentials(
      req.body.email,
      req.body.password
    );
    const token = await user.generateAuthToken();
    res.send({ users: user, token: token });
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get("/users", async (req, res) => {
  try {
    const response = await User.find({});
    res.status(200).send(response);
  } catch (error) {
    res.status(404).send(error);
  }
});

router.get("/users/:id", async (req, res) => {
  try {
    const user = await User.findOne({ _id: req.params.id });
    if (!user) {
      console.log("no user found");
      return res.status(404).send("No User Found");
    }
    res.status(200).send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;
