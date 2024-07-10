const express = require("express");
const mysql = require("mysql2");
const app = express();
const port = 3000;

app.use(express.json());

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "300793mm",
  database: "students",
});

connection.connect((err) => {
  if (err) {
    console.error("MySQL serverə qoşulma mümkün olmadı: " + err.stack);
    return;
  }
  console.log(
    "MySQL serverə uğurla qoşuldunuz, connection id " + connection.threadId
  );
});

app.get("/", (req, res) => {
  res.send("<h1>users: /users </h1>");
});

app.get("/users", (req, res) => {
  const sql = "SELECT * FROM students";

  connection.query(sql, (err, results) => {
    if (err) {
      console.error("Sorğu icra olunarkən səhv: " + err.stack);
      res.status(500).send("Server səhvi baş verdi");
      return;
    }

    res.status(200).json(results);
  });
});

app.get("/users/:id", (req, res) => {
  const { id } = req.params;
  const sql = "SELECT * FROM students WHERE id = ?";

  connection.query(sql, [id], (err, results) => {
    if (err) {
      console.error("Sorğu icra olunarkən səhv: " + err.stack);
      res.status(500).send("Server səhvi baş verdi");
      return;
    }
    if (results.length === 0) {
      res.status(404).send("İstifadəçi tapılmadı");
      return;
    }
    res.status(200).json(results[0]);
  });
});

app.post("/users", (req, res) => {
  const { name, email, age } = req.body;
  const sql = "INSERT INTO students (name, email, age) VALUES (?, ?, ?)";

  connection.query(sql, [name, email, age], (err, results) => {
    if (err) {
      console.error("Sorğu icra olunarkən səhv: " + err.stack);
      res.status(500).send("Server səhvi baş verdi");
      return;
    }

    res.status(201).json({ id: results.insertId, name, email, age });
  });
});

app.put("/users/:id", (req, res) => {
  const { id } = req.params;
  const { name, email, age } = req.body;
  const sql = "UPDATE students SET name = ?, email = ?, age = ? WHERE id = ?";

  connection.query(sql, [name, email, age, id], (err, results) => {
    if (err) {
      console.error("Sorğu icra olunarkən səhv: " + err.stack);
      res.status(500).send("Server səhvi baş verdi");
      return;
    }
    if (results.affectedRows === 0) {
      res.status(404).send("İstifadəçi tapılmadı");
      return;
    }
    res.status(200).json({ id, name, email, age });
  });
});

app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  const sql = "DELETE FROM students WHERE id = ?";

  connection.query(sql, [id], (err, results) => {
    if (err) {
      console.error("Sorğu icra olunarkən səhv: " + err.stack);
      res.status(500).send("Server səhvi baş verdi");
      return;
    }
    if (results.affectedRows === 0) {
      res.status(404).send("İstifadəçi tapılmadı");
      return;
    }
    res.status(200).send("İstifadəçi silindi");
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
