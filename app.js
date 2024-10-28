const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Connect to MySQL
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'hospital_management'
});

db.connect(err => {
    if (err) throw err;
    console.log('Connected to MySQL');
});

// API to get all patients
app.get('/api/patients', (req, res) => {
    db.query('SELECT * FROM patients', (err, results) => {
        if (err) throw err;
        res.json(results);
    });
});

// API to add a new patient
app.post('/api/patients', (req, res) => {
    const { name, age, gender, contact, address, condition } = req.body;
    const query = 'INSERT INTO patients (name, age, gender, contact, address, condition) VALUES (?, ?, ?, ?, ?, ?)';
    db.query(query, [name, age, gender, contact, address, condition], (err, result) => {
        if (err) throw err;
        res.sendStatus(201);
    });
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
