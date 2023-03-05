import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes";
import blogRouter from "./routes/blog-routes";
import MyEnv from "dotenv";
const app = express();
MyEnv.config();
app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);
mongoose
  .connect(process.env.CONNECTION_URI)
  .then(() => app.listen(5000))
  .then(() => console.log("Connected to DB and listening to 5000"))
  .catch((err) => console.log(err));
