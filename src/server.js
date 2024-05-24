const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'session',
  port: 3306
});

db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL Connected...');
});

app.post('/submit-form', (req, res) => {
  const formData = req.body;
  const sql = 'INSERT INTO contact_forms SET ?';

  db.query(sql, formData, (err, result) => {
    if (err) {
      console.error('Error saving data to the database:', err);
      res.status(500).send('Error saving data to the database');
      return;
    }
    console.log('Data saved:', result);
    res.status(200).send('Data successfully saved');
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
