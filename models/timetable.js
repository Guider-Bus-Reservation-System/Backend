const mongoose = require("mongoose");
const Joi = require("joi");

// const columns: GridColDef[] = [
// 	{ field: "id", headerName: "ID", width: 90 },
// 	{
// 	  field: "img",
// 	  headerName: "Avatar",
// 	  width: 100,
// 	  renderCell: (params) => {
// 		return <img src={params.row.img || "/noavatar.png"} alt="" />;
// 	  },
// 	},
// 	{
// 	  field: "firstName",
// 	  headerName: "First name",
// 	  type: "string",
// 	  width: 150,
// 	  editable: true,
// 	},
// 	{
// 	  field: "lastName",
// 	  headerName: "Last name",
// 	  type: "string",
// 	  width: 150,
// 	},
// 	{
// 	  field: "email",
// 	  headerName: "Email",
// 	  type: "string",
// 	  width: 200,
// 	},
// 	{
// 	  field: "phone",
// 	  headerName: "Phone",
// 	  type: "string",
// 	  width: 150,
// 	},
// 	{
// 	  field: "createdAt",
// 	  headerName: "Created At",
// 	  width: 100,
// 	  type: "string",
// 	},
// 	{
// 	  field: "varified",
// 	  headerName: "Varified",
// 	  type: "boolean",
// 	  width: 100,
// 	},
//   ];

const timetableSchema = new mongoose.Schema({
  timetableNumber: {
    type: String,
    required: true,
  },
  route: {
    type: String,
    required: true,
  },
  driver: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  availability: {
    type: Boolean,
    required: true,
  },
});

const Timetable = mongoose.model("Timetable", timetableSchema);

function validateTimetable(timetable) {
  const schema = Joi.object({
    timetableNumber: Joi.string().required(),
    route: Joi.string().required(),
    driver: Joi.string().required(),
    contact: Joi.string().required(),
    price: Joi.number().required(),
    availability: Joi.boolean().required(),
  });
  return schema.validate(timetable);
}

module.exports.Timetable = Timetable;
module.exports.validateTimetable = validateTimetable;
