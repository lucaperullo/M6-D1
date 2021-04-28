import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import articleRoute from "./articles/index.js";
import authorRoute from "./authors/index.js";

const server = express();
const port = process.env.PORT;

server.use(cors());
server.use(express.json());
server.use("/articles", articleRoute);
server.use("/authors", authorRoute);

mongoose
  .connect(process.env.MONGO_ATLAS, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(
    server.listen(port, () => {
      console.log("The server's power level is over ", port);
    })
  );
