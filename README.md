# LinkUp

A modern real-time chat application built with **React, Node.js, MongoDB, and Socket.IO**. LinkUp enables seamless one-to-one and group conversations with instant message delivery, typing indicators, and real-time online status updates.

---

## Features

* Real-time messaging powered by Socket.IO
* Private and group conversations
* Live typing indicators
* Online / Offline user status
* Secure JWT authentication
* User profiles and account management
* Fully responsive design
* Instant message notifications
* Fast and intuitive user experience

---

## Tech Stack

### Frontend

* React.js
* Vite
* Tailwind CSS
* Axios
* Socket.IO Client

### Backend

* Node.js
* Express.js
* Socket.IO
* JWT Authentication
* bcrypt.js

### Database

* MongoDB
* Mongoose

---

## Project Structure

```bash
LinkUp/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── src/
│   ├── package.json
│   └── .env
│
└── README.md
```

---

## Installation & Setup

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/linkup.git
cd linkup
```

### 2. Install Dependencies

#### Frontend

```bash
cd frontend
npm install
```

#### Backend

```bash
cd ../backend
npm install
```

---

## Environment Variables

Create a `.env` file inside the backend directory:

```env
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_jwt_secret

NODE_ENV=development
```

---

## Run the Application

### Start Backend

```bash
cd backend
npm run dev
```

### Start Frontend

```bash
cd frontend
npm run dev
```

---

## 🌐 Production Build

### Build Frontend

```bash
npm run build --prefix frontend
```

### Start Production Server

```bash
npm start
```

---

## Core Functionalities

* Real-time socket connection management
* Instant message delivery
* Room-based private and group chats
* Authentication & authorization using JWT
* Persistent message storage in MongoDB
* Connection lifecycle handling for reconnects
* Responsive UI optimized for desktop and mobile

---

## Screenshots

Add your application screenshots here.

```md
/screenshots/chat-page.png
/screenshots/login-page.png
/screenshots/profile-page.png
```

---

## Future Enhancements

* Voice and video calling
* Message reactions
* File and image sharing
* Read receipts
* End-to-end encryption
* Push notifications

---

## Contributing

Contributions are welcome.

1. Fork the repository
2. Create a new branch

```bash
git checkout -b feature-name
```

3. Commit your changes

```bash
git commit -m "Add feature"
```

4. Push the branch

```bash
git push origin feature-name
```

5. Open a Pull Request

---

## License

This project is licensed under the MIT License.

---




