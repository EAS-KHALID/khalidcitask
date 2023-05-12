require("dotenv").config();
 console.log(process.env.host);
 console.log(process.env.PORT);
 


const express = require("express");
const bodyParser = require('body-parser');
const mysql = require('mysql2');

const app = express();



//app.use(express.static('frontend'));
// app.use(express.json());
app.use(bodyParser.json());



const connection = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  database: process.env.database,
  password: process.env.password



});

connection.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('Connected!');
});

app.get('/api/tasks', (req, res) => {
  
  connection.query('SELECT * FROM tasks', (err, rows) => {
    if (err) throw err;
    res.send(rows);
  });
});

app.post('/api/tasks', (req, res) => {
  const { name, description } = req.body;
  connection.query(
    'INSERT INTO tasks (name, description) VALUES (?, ?)',
    [name, description],
    (err, result) => {
      if (err) throw err;
      res.send(result);
    }
  );
});

app.put('/api/tasks/:id', (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  connection.query(
    'UPDATE tasks SET name = ?, description = ? where id = ?',
    [name, description, id],
    (err, result) => {
      if (err) throw err;
      res.send(result);
    }
  );
});

app.delete('/api/tasks/:id', (req, res) => {
  const { id } = req.params;
  connection.query('DELETE FROM tasks where id = ?', [id], (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});

app.listen(process.env.PORT, () => console.log('Server started!'));