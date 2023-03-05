const Task = require("../models/tasks");

const getAllTasks = (req, res) => {
  res.send("All Items");
};

const createTask = async (req, res) => {
  const task = await Task.create(req.body);
  res.status(201).json({ task });
};

const getSingleTask = (req, res) => {
  res.send("Task By ID");
};

const updateTask = (req, res) => {
  res.send(req.body);
};

const deleteTask = (req, res) => {
  res.send("Delete Items");
};

module.exports = {
  getAllTasks,
  createTask,
  getSingleTask,
  updateTask,
  deleteTask,
};
