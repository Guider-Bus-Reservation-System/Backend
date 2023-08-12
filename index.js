const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const app = express();

const userRoute = require("./routes/user");
const busRoute = require("./routes/bus");
const timetableRoute = require("./routes/timetable");

app.use(express.json());
app.use(cors());

app.use("/api/user", userRoute);
app.use("/api/bus", busRoute);
app.use("/api/timetable", timetableRoute);

mongoose.connect("mongodb://127.0.0.1:27017/guider").then(() => {
  console.log("Connected to MongoDB");
});

app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});
