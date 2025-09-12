# AI-Driven-Mock-Interview-Platform
Your Personal AI-Powered Interview Coach.


This is a comprehensive web application designed to help job seekers prepare for interviews using an AI-driven mock interview simulator. The platform provides a realistic interview experience, generates personalized questions based on user input, and offers instant, question-by-question feedback to help you improve your skills and boost your confidence.
<br>
<br>
**Features**
<br>
<br>
**Personalized Mock Interviews:**&nbsp&nbsp Create custom interview sessions by specifying the job role, description, years of experience, and tech stacks.
<br>
<br>
**AI-Driven Question Generation:**&nbsp&nbsp The application leverages the Google Generative AI model (gemini-1.5-flash) to generate relevant and challenging interview questions on the fly.
<br>
<br>
**Real-time Feedback:**&nbsp&nbsp Receive instant, structured feedback on your answers, including an overall rating and specific areas for improvement.
<br>
<br>
**Webcam and Microphone Support:**&nbsp&nbsp Practice your responses in a real-world setting with built-in webcam and mic functionality.
<br>
<br>
**User Authentication:**&nbsp&nbsp Secure user registration and login system with password hashing and JWT-based authentication.
<br>
<br>
<br>
**Technologies Used**
<br>
<br>
**Frontend**
<br>
<br>
**EJS (Embedded JavaScript):**&nbsp&nbsp For dynamic and reusable HTML templates.
<br>
<br>
**Tailwind CSS:**&nbsp&nbsp A utility-first CSS framework for rapid and responsive UI development.
<br>
<br>
**JavaScript (Vanilla):**&nbsp&nbsp Powers the client-side logic, including form handling, API calls, and dynamic content updates.
<br>
<br>
<br>
**Backend**
<br>
<br>
**Node.js & Express.js:**&nbsp&nbsp The core runtime and web framework for the server-side application.
<br>
<br>
**Google Generative AI:**&nbsp&nbsp The API used to generate interview questions and feedback.
<br>
<br>
**MySQL2:**&nbsp&nbsp The database driver for connecting to and interacting with the MySQL database.
<br>
<br>
**bcrypt:**&nbsp&nbsp For secure password hashing and comparison.
<br>
<br>
**jsonwebtoken (JWT):**&nbsp&nbsp For creating and verifying user authentication tokens.
<br>
<br>
**dotenv:**&nbsp&nbsp To manage environment variables securely.
<br>
<br>
<br>
<br>
**Project Structure**<br>
├── backend/<br>
│   ├── config/<br>
│   │   └── db.js<br>
│   ├── controllers/<br>
│   │   ├── aiController.js<br>
│   │   └── authController.js<br>
│   ├── middleware/<br>
│   │   └── authMiddleware.js<br>
│   └── routes/<br>
│       ├── aiRoutes.js<br>
│       ├── authRoutes.js<br>
│       └── protectedRoutes.js<br>
├── frontend/<br>
│   ├── public/<br>
│   └── views/<br>
│       ├── home.ejs<br>
│       ├── interview.ejs<br>
│       └── signup.ejs<br>
├── node_modules/<br>
├── .env<br>
├── app.js<br>
├── help.txt<br>
├── package.json<br>
└── package-lock.json<br>
<br>
<br>
In public folder , store all the images and videos . 
<br>
<br>
<br>
**Getting Started**
<br>
<br>
Follow these steps to set up and run the project locally.
<br>
<br>
**Prerequisites**
<br>
<br>
**Node.js:**&nbsp&nbsp Ensure Node.js is installed on your machine.
<br>
<br>
**XAMPP:**&nbsp&nbsp A local server environment that includes MySQL. Start the Apache and MySQL services from the XAMPP control panel.
<br>
<br>
**MySQL Database:**&nbsp&nbsp Create a database named interview_db. You will also need a users table to store user information. You can use the following SQL command:
<br>
<br>
<br>
CREATE TABLE users (<br>
  id INT AUTO_INCREMENT PRIMARY KEY,<br>
  username VARCHAR(255) NOT NULL,<br>
  email VARCHAR(255) NOT NULL UNIQUE,<br>
  password VARCHAR(255) NOT NULL,<br>
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP<br>
);<br>
<br>
<br>
<br>
**Installation**<br>
<br>
<br>
**Install the backend dependencies:**
<br>
<br>
npm install
<br>
<br>
**Configuration**
<br>
<br>
Create a .env file in the root directory.
<br>
<br>
Add the following environment variables, replacing the placeholders with your actual values:
<br>
<br>
<br>
GEMINI_API_KEY=your_gemini_api_key_here<br>
PORT=3000<br>
DB_HOST=localhost<br>
DB_USER=root<br>
DB_PASS=your_mysql_password<br>
DB_NAME=interview_db<br>
JWT_SECRET=your_jwt_secret_key<br>
<br>
<br>
GEMINI_API_KEY: Get your API key from Google AI Studio.
<br>
<br>
JWT_SECRET: Generate a secure secret key using an online tool like Vercel's secret generator.
<br>
<br>
<br>
**Running the Application**
<br>
<br>
Ensure your MySQL and Apache services are running via XAMPP.
<br>
<br>
**Start the server:**
<br>
<br>
node app.js
<br>
<br>
Open your web browser and navigate to http://localhost:3000.