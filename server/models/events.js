import { Schema, model } from "mongoose";

const eventSchema = new Schema({
  title: {
    type: String,
    required: [true, "Set title"],
  },
  description: {
    type: String,
  },
  eventDate: {
    type: Date,
  },
  organization: {
    type: String,
  },
});

eventSchema.post("save", (error, data, next) => {
  error.status = 400;
  next();
});
const Event = model("event", eventSchema);

module.exports = {
  Event,
};
