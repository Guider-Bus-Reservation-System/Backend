const mongoose = require("mongoose");
const express = require("express");
const app = express();

const busRoute = require("./routes/bus");

app.use(express.json());
app.use("/api/bus", busRoute);

mongoose.connect("mongodb://127.0.0.1:27017/guider").then(() => {
	console.log("Connected to MongoDB");
});

app.listen(3000, () => {
	console.log("Server is running on port 3000.");
});
