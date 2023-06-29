const { modal, Schema } = require("mongoose");

const HousesSchema = new Schema({
  title: { type: String, required: true },
  location: String,
  description: String,
  rent: { type: Number, required: true },
});

export const House = modal("House", HousesSchema);
