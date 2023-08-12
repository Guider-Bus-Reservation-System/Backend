const express = require("express");
const router = express.Router();

const { Bus, validateBus } = require("../models/bus");

router.get("/", async (req, res) => {
  const busses = await Bus.find();

  res.send(busses);
});

router.get("/:id", async (req, res) => {
  const bus = await Bus.findById(req.params.id);

  if (!bus) {
    return res.send("Bus not found").status(404);
  }

  res.send(bus);
});

router.post("/", async (req, res) => {
  const { error } = validateBus(req.body);

  if (error) {
    return res.send(error.details[0].message).status(400);
  }

  const bus = new Bus({
    busNumber: req.body.busNumber,
    route: req.body.route,
    driver: req.body.driver,
    contact: req.body.contact,
    price: req.body.price,
    availability: req.body.availability,
  });

  await bus.save();

  res.send(bus);
});

router.put("/:id", async (req, res) => {
  const { error } = validateBus(req.body);

  if (error) {
    return res.send(error.details[0].message).status(400);
  }

  const bus = await Bus.findByIdAndUpdate(
    req.params.id,
    {
      busNumber: req.body.busNumber,
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

  if (!bus) {
    return res.send("Bus not found").status(404);
  }

  res.send(bus);
});

router.delete("/:id", async (req, res) => {
  const bus = await Bus.findByIdAndDelete(req.params.id);

  if (!bus) {
    return res.send("Bus not found").status(404);
  }

  res.send(bus);
});

module.exports = router;
