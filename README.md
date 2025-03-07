# Blog Website

This project allows users to write and store their own blogs! I developed this project to include 
my own API, using two JavaScript files (one for the server and one for the client) to run concurrently. 

## Technologies Used

- Node.js: JavaScript runtime environment used for building the server.
- Express: Web framework for Node.js that simplifies server creation and routing.
- EJS: Embedded JavaScript templating for rendering views.
- Body-Parser: Middleware to parse incoming request bodies in various formats (JSON, URL-encoded).
- Concurrently: An npm package used to run multiple scripts concurrently (client-side and server-side).
- dotenv: Loads environment variables from a .env file.
- Axios: Promise-based HTTP client for making requests from the client-side to the server-side API.


## Installation Steps

To install this project, you will want to follow these instructions in order:
1. Ensure you have Node.js installed on your local machine. 
    1. If you don't have Node.js installed, you can download it from [here](https://nodejs.org/en/download).Once Node.js is running, open a new terminal and move to the next step.
2. Clone the repository by entering 'git clone https://github.com/ericdurban/Blog-App.git' in the terminal.
3. Enter in terminal, 'cd Blog-App'. 
4. Enter in terminal, 'npm install' to ensure all the needed dependencies are added and installed locally. 
PLEASE NOTE: If you have any issues in later steps running the project, try individually installing dependencies listed on top of index.js file. For example, enter in terminal, 'npm i express' to install express dependency package.
5. Enter in terminal, 'npm start'. Your terminal should register the command and provide a message "Server running on port: 3000". 

## Usage

Steps to utilize the application:
1. Once you've received the message from your terminal that the server is running, open your browser and navigate to http://localhost:3000. 
2. Now that you are on the application, you can add, delete, or edit your own blogs! 
    1. Adding a blog: Click the 'New Post' button. Fill out the appropriate information and click 'submit'.
    2. Deleting a blog: Click the 'Delete' button under the blog you'd like to delete. 
    3. Editing a blog: Click the 'Edit' button under the blog you'd like to select. The text will then become editable. Then you can click 'submit'. 

## Contributing 

If you'd like to contribute, please follow these steps:
1. Fork the repository.
2. Create a new branch (git checkout -b feature/your-feature).
3. Make your changes.
4. Commit your changes (git commit -am 'Add new feature').
5. Push to the branch (git push origin feature/your-feature).
6. Create a new pull request.

## License
This project does not currently have a license. All rights reserved. 
This project is free to use for personal, non-commercial purposes only. You may not distribute or modify the project without the author's permission.

## Acknowledgements

- Thanks to Angela Yu and her amazing bootcamp that helped me develop the tools I needed to make this website!
