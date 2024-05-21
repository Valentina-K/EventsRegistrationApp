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
    required
  },
  organization: {
    type: String,
    required
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
