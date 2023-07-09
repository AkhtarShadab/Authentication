`

# Secret Sharing App

This is a simple web application that allows users to share secrets anonymously. Users can register, log in, submit their secrets, and view secrets shared by other users.

## Demo

The application is live and can be accessed at [https://passpostauth.onrender.com/](https://passpostauth.onrender.com/).

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js
- MongoDB

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/AkhtarShadab/Authentication
   ```

2. Navigate to the project directory:

   ```bash
   cd Authentication
   ```

3. Install the dependencies:

   ```bash
   npm install
   ```

4. Set up environment variables:

   - Create a `.env` file in the root directory.
   - Add the following variables to the `.env` file:

     ```bash
     SOME_32BYTE_BASE64_STRING=your-32-byte-base64-string
     ```

5. Start the application:

   ```bash
   npm start
   ```

6. Open your web browser and visit `http://localhost:3000` to access the Secret Sharing App.

## Usage

- Register a new account by visiting `/register` and providing a unique username and password.
- Log in to your account by visiting `/login` and entering your credentials.
- Submit a secret by visiting `/submit` and providing your secret message.
- View shared secrets by visiting `/secrets`.
- Log out by visiting `/logout`.

## Technologies Used

- Express.js: Fast, unopinionated, minimalist web framework for Node.js.
- EJS: Templating engine for generating dynamic HTML pages.
- bodyParser: Middleware for parsing request bodies.
- mongoose: MongoDB object modeling for Node.js.
- session: Middleware for managing user sessions.
- passport: Authentication middleware for Node.js.
- passport-local-mongoose: Mongoose plugin for simplifying passport-local authentication.
- MongoDB: NoSQL database for storing user information and secrets.

## Contributing

Contributions are welcome! If you find any bugs or want to enhance the application, please submit an issue or a pull request.

## Contact

If you have any questions or suggestions, feel free to contact the project maintainer at [sakn501@gmail.com](mailto:sakn501@gmail.com).

Enjoy sharing your secrets!
