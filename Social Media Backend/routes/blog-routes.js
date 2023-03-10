import express from "express";
import {
  getAllBlogs,
  addBlog,
  updateBlog,
  getByID,
  deleteBlog,
} from "../controllers/blog-controller";

const blogRouter = express.Router();

blogRouter.get("/", getAllBlogs);
blogRouter.post("/add", addBlog);
blogRouter.put("/update/:id", updateBlog);
blogRouter.get("/:id", getByID);
blogRouter.delete("/:id", deleteBlog);

export default blogRouter;
