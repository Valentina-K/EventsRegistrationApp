import { Schema, model } from "mongoose";

const participantSchema = new Schema({
  name: {
    type: String,
    required: [true, "Set name"],
  },
  email: {
    type: String,
    required: [true, "Set email"],
  },
});

participantSchema.post("save", (error, data, next) => {
  error.status = 400;
  next();
});
const Participant = model("participant", participantSchema);

module.exports = {
  Participant,
};
