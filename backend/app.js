const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME, 
  waitForConnections: true,
  connectionLimit: 10,
});

connection.connect((error) => {
  if (error) throw error;
  console.log('✅ MySQL 接続成功！');
});

app.get('/', (req, res) => {
  connection.query('SELECT * FROM table_data ORDER BY id DESC', (error, results) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ success: false });
    }
    res.json(results);
  });
});


app.post('/table', (req, res) => {
  const { date, item, unitprice, quantity, back, amount, income } = req.body;
  console.log(req.body);
  const sql = `
    INSERT INTO table_data 
      (date, item, unitprice, quantity, back, amount, income)
    VALUES (?, ?, ?, ?, ?, ?, ?)
  `;

  connection.query(
    sql,
    [date, item, unitprice, quantity, back, amount, income],
    (err, result) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ success: false });
      }
      res.json({ success: true, id: result.insertId }); 
    }
  );
});


app.delete('/table/:id', (req, res) => {
  const { id } = req.params;
  connection.query('DELETE FROM table_data WHERE id = ?', [id], (err, result) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ success: false });
    }
    res.json({ success: true });
  });
});

app.listen(port, () => {
  console.log(`🚀 サーバー起動中: http://localhost:${port}`);
});
