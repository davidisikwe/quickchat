# QuickChat 🗨️

**QuickChat** is a full-stack real-time messaging platform that enables seamless one-on-one and group conversations. Built using **React**, **Node.js**, **Express**, **MongoDB**, and **Socket.IO**, the app supports secure login, real-time WebSocket communication, and full CRUD operations.

---

## 🚀 Features

- 🔐 User authentication (signup/login)
- 💬 One-on-one and group chat support
- 🔁 Real-time messaging with WebSockets (Socket.IO)
- 🧾 Full CRUD operations on users, messages, and chat groups
- 📱 Responsive UI for mobile and desktop
- 🌐 RESTful API backend with secure endpoints

---

## 🧱 Tech Stack

**Frontend:**
- React.js
- HTML5, CSS3
- Axios
- Socket.IO Client

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- Socket.IO Server
- JWT (JSON Web Tokens)
- bcrypt (Password Hashing)

---

## 📁 Folder Structure

quickchat/ ├── client/ # React frontend │ └── src/ # Frontend source code ├── server/ # Express backend │ ├── models/ # Mongoose models │ ├── routes/ # API routes │ ├── config/ # DB and JWT config │ └── index.js # Server entry point └── README.md

yaml
Copy
Edit

---

## 🛠️ Installation

1. **Clone the repository**

```bash
git clone https://github.com/davidisikwe/quickchat.git
cd quickchat
Install and start the backend

bash
Copy
Edit
cd server
npm install
npm start
Install and start the frontend

bash
Copy
Edit
cd ../client
npm install
npm start
Environment Variables

Create a .env file in the /server directory with the following:

ini
Copy
Edit
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
📸 Screenshots (optional)
Add screenshots of:

🔐 Login/Register Page

💬 Chat UI

👥 Group Chat View

🧪 API Endpoints (Sample)

Method	Endpoint	Description
POST	/api/users/signup	Register a new user
POST	/api/users/login	Authenticate user
GET	/api/chats	Retrieve user chat list
POST	/api/messages	Send a new message
GET	/api/messages/:id	Fetch chat messages
🤝 Contributing
Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to change.

📝 License
This project is licensed under the MIT License.

👨‍💻 Author
Chukwuemeka David Isikwe
GitHub: @davidisikwe
LinkedIn: david-isikwe

vbnet
Copy
Edit

Let me know if you'd like me to generate the `LICENSE` file or help write your first GitHub issue/PR for this 
