const express = require("express");
const router = express.Router();

const { Timetable, validateTimetable } = require("../models/timetable");

router.get("/", async (req, res) => {
  const timetableses = await Timetable.find();

  res.send(timetableses);
});

router.get("/:id", async (req, res) => {
  const timetable = await Timetable.findById(req.params.id);

  if (!timetable) {
    return res.send("Timetable not found").status(404);
  }

  res.send(timetable);
});

router.post("/", async (req, res) => {
  const { error } = validateTimetable(req.body);

  if (error) {
    return res.send(error.details[0].message).status(400);
  }

  const timetable = new Timetable({
    timetableNumber: req.body.timetableNumber,
    route: req.body.route,
    driver: req.body.driver,
    contact: req.body.contact,
    price: req.body.price,
    availability: req.body.availability,
  });

  await timetable.save();

  res.send(timetable);
});

router.put("/:id", async (req, res) => {
  const { error } = validateTimetable(req.body);

  if (error) {
    return res.send(error.details[0].message).status(400);
  }

  const timetable = await Timetable.findByIdAndUpdate(
    req.params.id,
    {
      timetableNumber: req.body.timetableNumber,
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

  if (!timetable) {
    return res.send("Timetable not found").status(404);
  }

  res.send(timetable);
});

router.delete("/:id", async (req, res) => {
  const timetable = await Timetable.findByIdAndDelete(req.params.id);

  if (!timetable) {
    return res.send("Timetable not found").status(404);
  }

  res.send(timetable);
});

module.exports = router;
