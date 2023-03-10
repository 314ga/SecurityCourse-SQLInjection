const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3002;
app.use(cors());
app.use(express.json());

const query = require("query-mysql");

// Route to get user
app.get("/api/get/:id", (req, res) => {

  const userId = req.params.id.toString();

  console.log(userId);
  query.configure({
    host: "localhost",
    user: "root",
    password: "",
    database: "security",
  });
  query.base.fetchById("users", userId, "email", (msg, resp) => {
    console.log(msg, resp);
    res.send(resp);
  });
});
// get notes
app.get("/api/getnote/:id", (req, res) => {

  const userId = req.params.id.toString();

  console.log(userId);
  query.configure({
    host: "localhost",
    user: "root",
    password: "",
    database: "security",
  });
  query.base.fetchById("notes", userId, "email", (msg, resp) => {
    console.log(msg, resp);
    res.send(resp);
  });
});
// get user data
app.get("/api/get_userinfo/:id", (req, res) => {

  const userId = req.params.id.toString();

  console.log(userId);
  query.configure({
    host: "localhost",
    user: "root",
    password: "",
    database: "security",
  });
  query.base.fetchById("users", userId, "email", (msg, resp) => {
    console.log(msg, resp);
    res.send(resp);
  });
});

app.post("/api/reset/:id/:psw/:oldpsw", (req, res) => {
  const userId = req.params.id.toString();
  const pswd = req.params.psw.toString();
  const oldPswd = req.params.oldpsw.toString();

  let obj = {
    password: oldPswd,
  };
  query.configure({
    host: "localhost",
    user: "root",
    password: "",
    database: "security",
  });
  query.base.update(
    "users",
    obj,
    pswd,
    "email = '" + userId + "' AND password",
    (msg, resp) => {
      console.log("MSG:" + msg)
      console.log(msg, resp);
      if (resp === 0) {
        res.status(400);
        res.send("Wrong username or password");
      }
      else {
        res.send("OK");
      }

    }
  );
});
// Route to get user
app.get("/api/login/:id/:pass", (req, res) => {

  const userId = req.params.id.toString();
  const pass = req.params.pass.toString();
  console.log(userId);
  let obj = {
    email: req.body.email,
    password: req.body.password,
    age: req.body.age,
    name: req.body.name,
  };
  query.configure({
    host: "localhost",
    user: "root",
    password: "",
    database: "security",
  });
  query.base.fetchById("users", userId, "email", (msg, resp) => {
    console.log("MSG: " + msg)
    console.log(resp);
    if (resp[0].password === pass) {
      res.send('OK');
    }
    else {
      res.status(403);
      res.send("None shall pass");
    }
  });
});

app.post("/api/add_user", function (req, res) {

  let obj = {
    email: req.body.email,
    password: req.body.password,
    age: req.body.age,
    name: req.body.name
  }
  //res.end(JSON.stringify(response));
  query.configure({
    host: "localhost",
    user: "root",
    password: "",
    database: "security",
  });

  query.base.fetchById("users", obj.email, "email", (msg, resp) => {
    console.log(resp);
    if (resp[0]) {
      res.status(403);
      res.send("USER EXISTS");
    } else {
      query.configure({
        host: "localhost",
        user: "root",
        password: "",
        database: "security",
      });
      query.base.create("users", obj, (msg, resp) => {
        console.log(msg, resp);
        res.send(resp);
      });
    }
  });

});


app.post("/api/add_note", function (req, res) {

  let obj = {

    title: req.body.title,
    content: req.body.content,
    email: req.body.email,
  }
  //res.end(JSON.stringify(response));
  query.configure({
    host: "localhost",
    user: "root",
    password: "",
    database: "security",
  });

  query.base.create("notes", obj, (msg, resp) => {
    console.log(msg, resp);
    res.send(resp);
  });


});


app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});