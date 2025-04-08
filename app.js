const conexiune = require('./db'); // presupunem că ai deja db.js făcut

async function adaugaUtilizator(nume, email) {
  try {
    const [rez] = await conexiune.query(
      'INSERT INTO utilizatori (nume, email) VALUES (?, ?)',
      [nume, email]
    );
    console.log('Utilizator băgat în bază cu ID-ul:', rez.insertId);
  } catch (err) {
    console.error('Nu am putut băga utilizatoru:', err);
  }
}

adaugaUtilizator('Ionel', 'ionel@sat.md');
