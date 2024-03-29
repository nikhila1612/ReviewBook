const express = require('express');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const axios = require('axios');
const pg =require('pg');

const app = express();
const PORT =  3000;

app.set('view engine', 'ejs'); // Set EJS as the template engine
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("/public"));// Serve static files from the 'public' directory


app.use(methodOverride('_method'));
// Connect to the database
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "book",
  password: "16122000",
  port: 5432,
});
db.connect()
  .then(() => {
    console.log('Connected to the database');
    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error('Error connecting to the database:', err);
  });



  app.get('/', async (req, res) => {
    try {
      const books = await db.query('SELECT * FROM books ORDER BY rating DESC, id DESC');
      const booksWithCovers = await Promise.all(books.rows.map(async (book) => {
        const isbn = book.isbn; // Assuming you have an 'isbn' column in your database
        if (isbn) {
          try {
            const response = await axios.get(`https://openlibrary.org/api/books?bibkeys=ISBN:${isbn}&jscmd=data&format=json`);
            const coverUrl = response.data[`ISBN:${isbn}`]?.cover?.medium;
            console.log(coverUrl)
            if (coverUrl) {
              book.coverUrl = coverUrl;
            }
          } catch (error) {
            console.error('Error fetching cover:', error);
          }
        }
        return book;
      }));
      res.render('index', { books: booksWithCovers });
    } catch (error) {
      console.error('Error fetching books:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  // Add a new book
  app.post('/books', async (req, res) => {
    try {
      const { title, author, rating, isbn} = req.body;
      const newBook = await db.query('INSERT INTO books (title, author, rating, isbn) VALUES ($1, $2, $3,$4) RETURNING *', [title, author, rating, isbn]);
      res.redirect('/');
    } catch (error) {
      console.error('Error adding book:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  // Update a book
  app.put('/update/:id', async (req, res) => {
    try {
      const { id } = req.params;
      console.log(id)
      const { rating } = req.body;
      const updatedBook = await db.query('UPDATE books SET rating = $1 WHERE id = $2 RETURNING *', [rating, id]);
      res.redirect('/');
    } catch (error) {
      console.error('Error updating book:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  
  // Delete a book
  app.delete('/delete/:id', async (req, res) => {
    try {
      const { id } = req.params;
      await db.query('DELETE FROM books WHERE id = $1', [id]);
      res.redirect('/');
    } catch (error) {
      console.error('Error deleting book:', error);
      res.status(500).json({ message: 'Internal server error' });
    }
  });
  


 
