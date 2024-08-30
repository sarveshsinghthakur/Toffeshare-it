# Real-Time File Sharing Application

## Overview

This project is a real-time file-sharing application using Node.js, Express, and Socket.IO. It allows users to create and join rooms, upload files, and receive files in real-time. The application consists of a sender and a receiver component that communicate through WebSockets.

## Features

- Create and join rooms
- Upload files from the sender
- Receive and download files on the receiver side
- Real-time progress updates for file uploads

## Technologies Used

- **Node.js**: JavaScript runtime for building the server.
- **Express**: Web framework for Node.js to serve static files and handle HTTP requests.
- **Socket.IO**: Library for real-time, bidirectional communication between web clients and servers.
- **HTML/CSS/JavaScript**: Front-end technologies used for the user interface.

## Installation

1. **Clone the Repository**

   ```bash
<<<<<<< HEAD
   git clone https://github.com/yourusername/your-repository.git
   cd your-repository
Install Dependencies
=======
   git clone https://github.com/sarveshsinghthakur/Toffeshare-it
   ```
>>>>>>> ade0d089c6a491e787a1a4f9fcf41d7db3add414

Ensure you have Node.js installed. Then, install the necessary dependencies:

<<<<<<< HEAD
bash
Copy code
npm install
Run the Application
=======
   ```bash
   cd Toffeshare-it
   
   ```
>>>>>>> ade0d089c6a491e787a1a4f9fcf41d7db3add414

Start the server:

bash
Copy code
npm start
The application will be available at http://localhost:3000.

Usage
Sender Side

Click the "Start Connection" button to generate a room ID.
Share the room ID with the receiver.
Use the file input to select and upload files. Progress will be displayed during the upload.
Receiver Side

Enter the room ID received from the sender and click "Start Connection."
Wait for the file to be uploaded. The progress will be displayed and the file will be saved upon completion.
File Structure
server.js: Main server file that initializes the Express app and Socket.IO.
public/: Directory for static files (HTML, CSS, JS).
index.html: Main HTML file that serves the sender and receiver interface.
sender.js: JavaScript file for sender-side functionality.
receiver.js: JavaScript file for receiver-side functionality.
package.json: Project metadata and dependencies.
Contributing
Fork the repository
Create a new branch (git checkout -b feature-branch)
Commit your changes (git commit -am 'Add new feature')
Push to the branch (git push origin feature-branch)
Create a new Pull Request
License
This project is licensed under the MIT License - see the LICENSE file for details.

Acknowledgments
Socket.IO for real-time communication.
Express for the web server framework.