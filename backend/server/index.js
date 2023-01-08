const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 3002;
app.use(cors());
app.use(express.json());

const query = require("query-mysql");
query.configure({
  host: "localhost",
  user: "root",
  password: "",
  database: "security",
});

query.base.fetchById("users", "noob", "username", (msg, res) => {
  console.log(msg, res);
});
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
  query.base.fetchById("users", userId, "username", (msg, resp) => {
    console.log(msg, resp);
    res.send(resp);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
