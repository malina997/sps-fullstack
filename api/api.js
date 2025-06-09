const express = require('express');
const router = express.Router();
const db = require('../database/db');

router.get('/borrowers', (req, res) => {
  db.all('SELECT * FROM borrowers', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

router.post('/borrowers', (req, res) => {
  const { firstname, lastname, email, phone } = req.body;
  db.run(
    'INSERT INTO borrowers (firstname, lastname, email, phone) VALUES (?, ?, ?, ?)',
    [firstname, lastname, email || null, phone || null],
    function(err) {
      if (err) return res.status(500).json({ error: err.message });
      res.status(201).json({ id: this.lastID });
    }
  );
});

router.delete('/borrowers/:id', (req, res) => {
  const id = req.params.id;
  db.run('DELETE FROM borrowers WHERE id = ?', [id], function(err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ message: 'Vypůjčitel byl smazán' });
  });
});

router.get('/loans', (req, res) => {
  db.all(`
    SELECT loans.id, loans.loan_date, loans.return_date, loans.returned,
           books.title as book_title, 
           authors.firstname as author_firstname, authors.lastname as author_lastname,
           borrowers.firstname as borrower_firstname, borrowers.lastname as borrower_lastname
    FROM loans
    JOIN books ON loans.book_id = books.id
    JOIN authors ON books.author_id = authors.id
    JOIN borrowers ON loans.borrower_id = borrowers.id
    ORDER BY loans.loan_date DESC
  `, [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

router.post('/loans', (req, res) => {
  const { bookId, borrowerId, loanDate, returnDate } = req.body;
  
  db.get(
    'SELECT id FROM loans WHERE book_id = ? AND returned = 0', 
    [bookId], 
    (err, row) => {
      if (err) return res.status(500).json({ error: err.message });
      
      if (row) {
        return res.status(400).json({ error: 'Tato kniha je již vypůjčena' });
      }
      
      db.run(
        'INSERT INTO loans (book_id, borrower_id, loan_date, return_date, returned) VALUES (?, ?, ?, ?, 0)',
        [bookId, borrowerId, loanDate, returnDate || null],
        function(err) {
          if (err) return res.status(500).json({ error: err.message });
          
          
          db.get(`
            SELECT loans.id, loans.loan_date, loans.return_date, loans.returned,
                   books.title as book_title, 
                   authors.firstname as author_firstname, authors.lastname as author_lastname,
                   borrowers.firstname as borrower_firstname, borrowers.lastname as borrower_lastname
            FROM loans
            JOIN books ON loans.book_id = books.id
            JOIN authors ON books.author_id = authors.id
            JOIN borrowers ON loans.borrower_id = borrowers.id
            WHERE loans.id = ?
          `, [this.lastID], (err, loan) => {
            if (err) return res.status(500).json({ error: err.message });
            res.status(201).json(loan);
          });
        }
      );
    }
  );
});

router.put('/loans/:id/return', (req, res) => {
  const id = req.params.id;
  const returnDate = new Date().toISOString().split('T')[0];
  
  db.run(
    'UPDATE loans SET returned = 1, return_date = ? WHERE id = ?',
    [returnDate, id],
    function(err) {
      if (err) return res.status(500).json({ error: err.message });
      if (this.changes === 0) return res.status(404).json({ error: 'Výpůjčka nenalezena' });
      res.json({ message: 'Kniha byla vrácena' });
    }
  );
});

module.exports = router;
