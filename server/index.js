const express = require("express");
const mysql = require("mysql");

const app = express();

app.use(express.json());

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "newpassword",
  database: "AuthFullstack",
  dialect: 'mysql'
});

app.listen(3001, () => {
  console.log("Server running on port 3001");
})