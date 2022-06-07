# Book Owl

## Project started 2022-05-11

## Installation

### Node.js and MongoDB

### React app

### Cypress testing

To install the dependency run "npm i cypress --save-dev". To open cypress write "npm run cypress:open" in the terminal.
Cypress.config.js:

- baseUrl: "http://localhost:3000",
- apiUrl: "http://localhost:8080",

## Routes BE

### book.js

- Create
  Creates a new book in the DB
- Get User books
  Gets the logged in users books from the DB
- Get books
  Gets all books from the DB
- Get single book
  Gets one book based on ID from the DB
- Update Book
  Updates one book in the DB
- Delete Book
  Deletes one book in the DB

### user.js

- Authorization
  Authenticate a user as a registered user
- Login
  Search for a user in the DB based on passwordmatch. If successful login set access token in FE
- Protected
  Compare user data via protected route
- Register
  Register a new user
- Logout
  Remove token in FE to log out a user
- Delete
  Delete a user based on ID from the DB
- Edit
  Update a users data in the DB based on ID
- Get
  Get a users first name without going through a protected route. Needed for other users to view eachothers names.

## Controllers BE

## Components FE

### addbook

### bookpage

Display a book dynamically by capturing the ID in URL params and searching through the DB.
Talks to book.js in BE routes.

### dashboard

A valid user is when there is a JWT token stored inside the cookies tab. If a unvalid user trys to access the dashboard it will then be redirected back twords the home component.

When a valid user lands on dashboard, the dashboard will then make a get request to the backend to decrypt the users JWT token and then get the respons of the users information.
After the response the component will then make 2 new more requests one for fetching all the users books and one for fetching all the users borrowed books.

### edit

### footer

### Home

### login

This component will make a request call to the backend with the information given by the users and send it to the backend. The information the component will take is a email and a password. if successful the user will then be navigated to the dashborad with a JWT token and a message.

### nav

### registration

Register a new user by posting form data to user.js route in BE.

### search

Search by title or author to display all matching books. Filter on location and genre.
Talks to book.js in BE.

### App.js

Contains all routes to the components and the navbar.

## Tests

- Registering a new user as Happy User (Should be used for testing a happy flow)
- Logging in Happy User

# Contributors

- Filip
- Amanda
- Frida
- Dimosthenis
- Jonathan
- David
- Licia
