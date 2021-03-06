const express = require("express");
const todoRoutes = express.Router();
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const PORT = 4000;

let Todo = require("./todo.model");

app.use(cors());
app.use(bodyParser.json());
app.get("/test", (req, res) => {
  res.send(`Hello!`);
});

//mongodb connection

mongoose.connect("mongodb://localhost:27017/todos", { useNewUrlParser: true });
const connection = mongoose.connection;

connection.once("open", () => {
  console.log("MongoDB connection established.");
});

//routes
todoRoutes.route("/").get((req, res) => {
  Todo.find((err, todos) => {
    if (err) {
      console.log(err);
    } else {
      res.json(todos);
    }
  })
});

todoRoutes.route("/:id").get((req, res) => {
  let id = req.params.id;
  Todo.findById(id, (err, todo) => {
    if(err) {
      res.json(err);
    } else {
      res.json(todo);
    }
  })
});

todoRoutes.route("/add").post((req, res) => {
  let todo = new Todo(req.body);
  todo.save().then(item => {
    res.status(200).json({ "todo": "Todo added successfully" });
  }).catch(err => {
    res.status(400).send("Adding new todo failed");
  });
});

todoRoutes.route("/delete/:id").delete((req, res) => {
  let id = req.params.id;
  Todo.findByIdAndDelete(id, (err, todo) => {
    if(err) {
      res.json(err);
    } else {
      res.json(todo);
    }
  })
});
todoRoutes.route("/delete").delete((req, res) => {
  Todo.collection.drop();
});

todoRoutes.route("/update/:id").post((req, res) => {
  Todo.findById(req.params.id, (err, todo) => {
    if (!todo) {
      res.status(404).send("Data is not found");
    } else {
      todo.description = req.body.description;
      todo.responsible = req.body.responsible;
      todo.priority = req.body.priority;
      todo.completed = req.body.completed;

      todo.save().then(todo => {
        res.json(todo + "Todo updated!");
      }).catch(err => {
        res.status(400).send("Update not possible");
      });
    }
  })
})

app.use("/todos", todoRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on Port: ${PORT}`);
})