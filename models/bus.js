const mongoose = require("mongoose");
const Joi = require("joi");

const busSchema = new mongoose.Schema({
	busNumber: {
		type: String,
		required: true,
	},
	from: {
		type: String,
		required: true,
	},
	to: {
		type: String,
		required: true,
	},
	distance: {
		type: String,
		required: true,
	},
	departureTime: {
		type: Array,
		required: true,
	},
	arrivalTime: {
		type: Array,
		required: true,
	},
	price: {
		type: Number,
		required: true,
	},
	contact: {
		type: String,
		required: true,
	},
});

const Bus = mongoose.model("Bus", busSchema);

function validateBus(bus) {
	const schema = Joi.object({
		busNumber: Joi.string().required(),
		from: Joi.string().required(),
		to: Joi.string().required(),
		distance: Joi.string().required(),
		departureTime: Joi.array().required(),
		arrivalTime: Joi.array().required(),
		price: Joi.number().required(),
		contact: Joi.string().required(),
	});
	return schema.validate(bus);
}

module.exports.Bus = Bus;
module.exports.validateBus = validateBus;
