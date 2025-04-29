# QuickChat 🔨

**QuickChat** is a full-stack real-time messaging platform that enables seamless one-on-one and group conversations. Built using **React**, **Node.js**, **Express**, **MongoDB**, and **Socket.IO**, the app supports secure login, real-time WebSocket communication, and full CRUD operations.

---

## 🚀 Features

- 🔐 User authentication (signup/login)
- 💬 One-on-one and group chat support
- 🔁 Real-time messaging with WebSockets (Socket.IO)
- 📟 Full CRUD operations on users, messages, and chat groups
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

```
Quickchat/
├── QuickchatFrontend/          # React frontend
│   └── src/         # Frontend source code
├── QuickchatBackend/          # Express backend
│   ├── models/      # Mongoose models
│   ├── routes/      # API routes
│   ├── config/      # DB and JWT config
│   └── index.js     # Server entry point
└── README.md
```

---

## 🛠️ Installation

1. **Clone the repository**

```
git clone https://github.com/davidisikwe/quickchat.git
cd quickchat
```

2. **Install and start the backend**

```
cd server
npm install
npm start
```

3. **Install and start the frontend**

```
cd ../client
npm install
npm start
```

4. **Create environment variables**

Create a `.env` file inside the `/server` directory with the following content:

```
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_jwt_secret
```

---


## 🥪 API Endpoints

| Method | Endpoint              | Description             |
|--------|-----------------------|-------------------------|
| POST   | /api/users/signup     | Register a new user     |
| POST   | /api/users/login      | Authenticate user       |
| GET    | /api/chats            | Retrieve user chat list |
| POST   | /api/messages         | Send a new message      |
| GET    | /api/messages/:id     | Fetch chat messages     |

---

## 🤝 Contributing

Pull requests are welcome! For major changes, please open an issue first to discuss what you’d like to change.

---

## 📝 License

This project is licensed under the MIT License.

---

## 👨‍💼 Author

**Chukwuemeka David Isikwe**  
GitHub: [@davidisikwe](https://github.com/davidisikwe)  
LinkedIn: [david-isikwe](https://www.linkedin.com/in/david-isikwe)
