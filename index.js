const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Stockage temporaire en mémoire
let books = [];

// GET /books
app.get('/books', (req, res) => {
  res.json(books);
});

// POST /books
app.post('/books', (req, res) => {
  const book = req.body;
  books.push(book);
  res.status(201).json({ message: 'Livre ajouté', book });
});

// Lancement du serveur
app.listen(port, () => {
  console.log(`Book service listening at http://localhost:${port}`);
});

