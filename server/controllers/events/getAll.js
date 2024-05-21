import { Event } from "../../models/events";
const listEvents = async (req, res, next) => {
  try {
    const { page = 1, limit = 12 } = req.query;
    const skip = (page - 1) * limit;
    const events = await Event.find(filter, "", { skip, limit });
    res.status(200).json(events);
  } catch (error) {
    next(error);
  }
};

module.exports = listEvents;
