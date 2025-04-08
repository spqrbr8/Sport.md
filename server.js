const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 3000;

// Permite trimiterea datelor JSON și formatele de formulare
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

// Conectare la baza de date MySQL
const conexiune = mysql.createConnection({
  host: 'localhost',
  user: 'root', // folosește utilizatorul și parola corectă pentru MySQL
  password: 'Oracle123@',
  database: 'sportmd'
});

conexiune.connect(err => {
  if (err) {
    console.error('Eroare la conectarea la baza de date:', err);
  } else {
    console.log('Conectat la baza de date MySQL!');
  }
});

// Endpoint-ul pentru a primi mesajele de contact
app.post('/trimite-contact', (req, res) => {
    const { nume, email, mesaj } = req.body;
  
    console.log('Date primite:', req.body);  // Afișează datele primite din formular
  
    const query = 'INSERT INTO mesaje_contact (nume, email, mesaj) VALUES (?, ?, ?)';
    conexiune.query(query, [nume, email, mesaj], (err, result) => {
      if (err) {
        console.error('Eroare la inserarea mesajului:', err);
        res.status(500).send('Eroare la trimiterea mesajului!');
      } else {
        console.log('Mesaj adăugat în baza de date:', result);
        res.status(200).send('Mesajul a fost trimis cu succes!');
      }
    });
  });
  

// Pornim serverul
app.listen(port, () => {
  console.log(`Serverul rulează pe http://localhost:${port}`);
});
