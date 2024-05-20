const HttpError = require("../../helpers/httperror");
import { Event } from "../../models/events";
const getEventById = async (req, res, next) => {
  try {
    const { eventId } = req.params;
    const result = await Event.findById(eventId);
    if (!result) {
      throw HttpError(404, "Not found");
    }
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

module.exports = getEventById;
