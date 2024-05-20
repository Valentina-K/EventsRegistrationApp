import express from "express";
const participantsRouter = express.Router();

participantsRouter.get("/", (req, res) => {
  res.json(events);
});

export default participantsRouter;
