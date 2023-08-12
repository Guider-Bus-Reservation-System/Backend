const mongoose = require("mongoose");
const Joi = require("joi");

// const columns: GridColDef[] = [
//   { field: "id", headerName: "ID", width: 90 },
//   {
//     field: "img",
//     headerName: "Avatar",
//     width: 100,
//     renderCell: (params) => {
//       return <img src={params.row.img || "/noavatar.png"} alt="" />;
//     },
//   },
//   {
//     field: "firstName",
//     headerName: "First name",
//     type: "string",
//     width: 150,
//     editable: true,
//   },
//   {
//     field: "lastName",
//     headerName: "Last name",
//     type: "string",
//     width: 150,
//   },
//   {
//     field: "email",
//     headerName: "Email",
//     type: "string",
//     width: 200,
//   },
//   {
//     field: "phone",
//     headerName: "Phone",
//     type: "string",
//     width: 150,
//   },
//   {
//     field: "createdAt",
//     headerName: "Created At",
//     width: 100,
//     type: "string",
//   },
//   {
//     field: "varified",
//     headerName: "Varified",
//     type: "boolean",
//     width: 100,
//   },
// ];

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  createdAt: {
    type: String,
    default: String,
  },
  varified: {
    type: Joi.boolean(),
  },
});

const User = mongoose.model("User", userSchema);

function validateUser(user) {
  const schema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().required(),
    createdAt: Joi.string(),
    varified: Joi.boolean(),
  });
  return schema.validate(user);
}

module.exports.User = User;
module.exports.validateUser = validateUser;
