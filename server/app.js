import express from "express";
import cors from "cors";
import participantsRouter from "./routes/participants-router";
const app = express();

const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.use("/participants", participantsRouter);

app.listen(port, () => {
  console.log("Example app listening on port 3000!");
});
