# ReviewBook

ReviewBook is a web application built with Node.js, Express, PostgreSQL, and EJS. It allows users to manage and review books by adding, updating, and deleting entries in a PostgreSQL database.

## Screenshots
![ReviewBook1](https://github.com/nikhila1612/ReviewBook/assets/84263617/65c0dc2a-d55e-4921-8ce9-c40cc68314fb)
![ReviewBook2](https://github.com/nikhila1612/ReviewBook/assets/84263617/64ceb073-c792-4869-9e4f-9c190fd149f8)
![ReviewBook3](https://github.com/nikhila1612/ReviewBook/assets/84263617/d6e69478-a17b-4f31-aeb5-2dcef8cd68c3)

## Features

- **View Books**: Display a list of books with their titles, authors, ratings, and covers (if available).
- **Add New Book**: Add a new book to the database by providing the title, author, rating, and ISBN.
- **Update Book Rating**: Update the rating of an existing book.
- **Delete Book**: Delete a book entry from the database.
- **Responsive Design**: The application is responsive and works well on various devices and screen sizes.
- **External API Integration**: Utilizes the OpenLibrary API to fetch book cover images based on ISBN.

## Technologies Used

- **Node.js**: JavaScript runtime for building server-side applications.
- **Express**: Web framework for Node.js used to build the application's backend.
- **PostgreSQL**: Open-source relational database management system for storing book data.
- **EJS**: Embedded JavaScript templating engine for rendering dynamic content on the server side.
- **Axios**: HTTP client for making API requests to fetch book cover images.
- **Bootstrap**: Front-end framework for designing responsive and mobile-first websites.

## Installation and Setup

1. Clone the repository:

   ```
   git clone 
   ```

2. Install dependencies:

   ```
   cd project-directory
   npm install
   ```

3. Set up PostgreSQL database:
   - Create a PostgreSQL database named `book`.
   - Modify the database configuration in `index.js` to match your PostgreSQL credentials (user, password, host, port).

4. Run the application:

   ```
   npm start
   ```

5. Open your web browser and navigate to `http://localhost:3000` to access the application.

## Usage

- Browse the list of books on the homepage.
- Click on the "Add New Book" link to add a new book to the database.
- Click on the delete button to remove a book entry.
- Use the update form to modify the rating of a book.

## Credits

- This application utilizes the [OpenLibrary API](https://openlibrary.org/developers/api) to fetch book cover images.

## Author

- Nikhila M

 
