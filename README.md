# Authentication App (Website Live - [https://passpostauth.onrender.com](https://passpostauth.onrender.com))

This is a web application that demonstrates user authentication using Passport.js, an authentication middleware for Node.js. The application allows users to register, log in, and access a secrets page if authenticated. It also provides an option to authenticate using a Google account.

## Technologies Used

The application is built using the following technologies and frameworks:

- Node.js: A JavaScript runtime environment for server-side development.
- Express.js: A web application framework for Node.js that provides a set of features for building web applications and APIs.
- MongoDB: A NoSQL database used for storing user information and authentication data.
- Mongoose: An Object-Data Mapping (ODM) library for MongoDB and Node.js, providing a higher-level abstraction for interacting with the database.
- EJS (Embedded JavaScript): A templating language used for generating HTML markup with JavaScript.
- Passport.js: An authentication middleware for Node.js that provides a flexible and modular authentication system, supporting various strategies such as local authentication and OAuth.
- Passport-local-mongoose: A Passport.js plugin for simplifying local authentication using Mongoose.
- Passport-google-oauth20: A Passport.js strategy for authenticating with Google using OAuth 2.0.
- express-session: A middleware for Express.js that enables session management and persistent session storage.
- dotenv: A module for loading environment variables from a .env file into process.env.
- Body-parser: A middleware for parsing the request body in Express.js.
- mongoose-findorcreate: A plugin for Mongoose that adds a convenient method for finding or creating a document based on a query.

## Functionality

The application provides the following functionality:

1. Home Page ("/"): Serves as the landing page for the application.

2. Registration Page ("/register"): Allows users to register for a new account by providing a username and password.

3. Login Page ("/login"): Allows registered users to log in using their username and password.

4. Google Authentication: Provides the option to authenticate using a Google account by clicking the "Sign in with Google" button on the login page. This feature utilizes Google OAuth 2.0.

5. Secrets Page ("/secrets"): A protected route accessible only to authenticated users. If a user is not logged in, they will be redirected to the login page.

6. Logout ("/logout"): Allows users to log out of their accounts.

## Security Enhancements (Branches)

The repository mentioned in the readme contains additional branches that showcase different security enhancements made to the application. These branches are:

1. `2_encryption`: Demonstrates the use of encryption techniques to secure sensitive user information.

2. `3_Password_Hashing`: Showcases password hashing, a secure method for storing and comparing passwords.

3. `4_Salting`: Demonstrates the use of password salting, an additional security measure for password hashing.

4. `5_Cookies_and_Session`: Introduces the use of cookies and sessions to enhance the user authentication process. This branch is live and hosted on [https://passpostauth.onrender.com](https://passpostauth.onrender.com) for reviewing purposes.

Each branch builds upon the previous one, incrementally improving the security of user authentication and data storage.

## Repository

The app's source code and branches can be found on the GitHub repository at [`Authentication`](https://github.com/AkhtarShadab/Authentication). Feel free to explore the different branches to review the security enhancements and implementation details.

## Live Demo

For a live demonstration of the app with the latest security enhancements, you can visit [https://passpostauth.onrender.com](https://passpostauth.onrender.com).

Please note that this is a demo environment, and it may not be suitable for production use.
