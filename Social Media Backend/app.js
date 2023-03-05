import express from "express";
import mongoose from "mongoose";
import router from "./routes/user-routes";
import blogRouter from "./routes/blog-routes";
const app = express();

app.use(express.json());
app.use("/api/user", router);
app.use("/api/blog", blogRouter);
mongoose
  .connect(
    "mongodb+srv://arsalan:gHpIuUVn2Z3DTQYI@blogpost.j5nmy3g.mongodb.net/BlogPost?retryWrites=true&w=majority"
  )
  .then(() => app.listen(5000))
  .then(() => console.log("Connected to DB and listening to 5000"))
  .catch((err) => console.log(err));

//gHpIuUVn2Z3DTQYI
