![BookOwlLogo](/frontend/public/bookowl.png)
# **Book Owl**
## **Project started 2022-05-11**
This project is created as a group assignment at our Fullstack webdeveloper class at Chas Academy. 
We chose to create this app wich gives people the ability to find books to borrow/let other people borrow their books. <br>

For this assignment we were allowed to use:

- React in frontend
- Node/express in backend
- MongoDB  for database

Final result: https://bookowl-u08.netlify.app/

## **Installation**
The tools we used for this project is VScode, Figma, git, github. <br>
To set up the project:
- Clone the github project
- In the terminal, navigate to the projects backend folder (`cd backend` in the shell, from the root of the project)
- Write command `npm run start` to start the server
- Navigate to "socket" folder (`cd socket`)
- Write command `npm run start` to start the chat-functionality 
- Navigate back to root folder (`cd ..` 2 times)
- Navigate to frontend folder (`cd frontend`)
- Write command `npm run start` to start client

Now you can navigate to
- localhost:3000 in the browser to see the frontend
- localhost:8080 in the browser to "see" the backend

### **Node.js and MongoDB**

### **React app**

### **Cypress testing**

To install the dependency run "npm i cypress --save-dev". To open cypress write "npm run cypress:open" in the terminal.
Cypress.config.js:

-   baseUrl: "http://localhost:3000",
-   apiUrl: "http://localhost:8080",

## **Routes BE**

### **book.js**

-   Create
    Creates a new book in the DB
-   Get User books
    Gets the logged in users books from the DB
-   Get books
    Gets all books from the DB
-   Get single book
    Gets one book based on ID from the DB
-   Update Book
    Updates one book in the DB
-   Delete Book
    Deletes one book in the DB

### **user.js**

-   Authorization
    Authenticate a user as a registered user
-   Login
    Search for a user in the DB based on passwordmatch. If successful login set access token in FE
-   Protected
    Compare user data via protected route
-   Register
    Register a new user
-   Logout
    Remove token in FE to log out a user
-   Delete
    Delete a user based on ID from the DB
-   Edit
    Update a users data in the DB based on ID
-   Get
    Get a users first name without going through a protected route. Needed for other users to view eachothers names.


## **Socket**

Server for sending and receiving messages in private chat between users.

## **Components FE**

### **addbook**

Form for users to add their own book to the database. 

On upon landing to the component, the component will then check if the user is signed in or not, if the user is signed in he/she can then add a book their own bookshelf. 

### **bookpage**

Display a book dynamically by capturing the ID in URL params and searching through the DB.
Talks to book.js in BE routes.

On upon landing to the component, the component will then check if the user is signed in or not, if the user is signed in he/she can then borrow the book if its avalible and if the user is not signed in there will be a button reference the user to sign in to be able to borrow the book.

### **dashboard**

A valid user is when there is a JWT token stored inside the cookies tab. If a unvalid user trys to access the dashboard it will then be redirected back twords the home component.

When a valid user lands on dashboard, the dashboard will then make a get request to the backend to decrypt the users JWT token and then get the respons of the users information.
After the response the component will then make 2 new more requests one for fetching all the users books and one for fetching all the users borrowed books.

### **edit**
Here, users can update their user info with a PUT request to db.
A user can update their names, email, city, email and password.

### **editbook**
Page where users can update their own books info with a PUT request to db

### **footer**
Imported to app.js and visible on every page. 
Contains copyright, links to social media accounts and all the group memebers github accounts. 

### **Home**
Landing page with info about the app and CTA to register, login and browse books. 

### **login**

This component will make a request call to the backend with the information given by the users and send it to the backend. The information the component will take is a email and a password. if successful the user will then be navigated to the dashborad with a JWT token and a message.

### **messenger**

### **ChatOnline**

View online friends/users.

### **Conversation**

Get conversations based on conversation Id.

### **Message**

Get or post messages with a specific conversation Id.

### **Messenger**

UI for the chat app.

### **registration**

Register a new user by posting form data to user.js route in BE.

### **search**

Search by title or author to display all matching books. Filter on location and genre.
Talks to book.js in BE.

### **App.js**

Contains all routes to the components and the navbar.

## **Tests**

-   Registering a new user as Happy User (Should be used for testing a happy flow)
-   Logging in Happy User

# **Contributors**

-   Filip  [GitHub](https://github.com/fbarfvestam)
-   Amanda [GitHub](https://github.com/amawre)
-   Frida [GitHub](https://github.com/frinica)
-   Dimosthenis [GitHub](https://github.com/Albatraoz12)
-   Jonathan [GitHub](https://github.com/Jonon)
-   David [GitHub](https://github.com/DavidMelander)
-   Licia [GitHub](https://github.com/lkthorn)
