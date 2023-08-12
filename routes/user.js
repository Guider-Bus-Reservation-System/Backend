const express = require("express");
const router = express.Router();

const { User, validateUser } = require("../models/user");

router.get("/", async (req, res) => {
  const userses = await User.find();

  res.send(userses);
});

router.get("/:id", async (req, res) => {
  const user = await User.findById(req.params.id);

  if (!user) {
    return res.send("User not found").status(404);
  }

  res.send(user);
});

router.post("/", async (req, res) => {
  const { error } = validateUser(req.body);

  if (error) {
    return res.send(error.details[0].message).status(400);
  }

  const user = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phone: req.body.phone,
    createdAt: req.body.createdAt,
    varified: req.body.varified,
  });

  await user.save();

  res.send(user);
});

router.put("/:id", async (req, res) => {
  const { error } = validateUser(req.body);

  if (error) {
    return res.send(error.details[0].message).status(400);
  }

  const user = await User.findByIdAndUpdate(
    req.params.id,
    {
      userNumber: req.body.userNumber,
      from: req.body.from,
      to: req.body.to,
      distance: req.body.distance,
      departureTime: req.body.departureTime,
      arrivalTime: req.body.arrivalTime,
      price: req.body.price,
      contact: req.body.contact,
    },
    { new: true }
  );

  if (!user) {
    return res.send("User not found").status(404);
  }

  res.send(user);
});

router.delete("/:id", async (req, res) => {
  const user = await User.findByIdAndDelete(req.params.id);

  if (!user) {
    return res.send("User not found").status(404);
  }

  res.send(user);
});

module.exports = router;
