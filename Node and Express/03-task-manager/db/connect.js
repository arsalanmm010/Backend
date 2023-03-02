const mongoose = require("mongoose");

const connectionString =
  "mongodb+srv://arsalan:Arsalan1@nodeexpressprojects.koajq4w.mongodb.net/03-TASK-MANAGER?retryWrites=true&w=majority";

mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to DB..."))
  .catch((err) => console.log(err));
