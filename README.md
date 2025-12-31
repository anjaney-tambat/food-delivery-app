# Food Delivery App

A full-stack food delivery application built with **React (Parcel)** on the frontend and **Node.js, Express, MongoDB** on the backend.

---

## Features

- User authentication (Signup / Login)
- Restaurant listing
- Restaurant menu
- Add to cart
- Place orders
- Order history
- Protected routes using JWT

---

## Tech Stack

### Frontend
- React
- Parcel
- Tailwind CSS
- Context API

### Backend
- Node.js
- Express
- MongoDB (Atlas)
- JWT Authentication

---

## Project Structure

root
│
├── backend
│ ├── controllers
│ ├── middleware
│ ├── models
│ ├── routes
│ ├── server.js
│ └── seed.js
│
├── src
│ ├── components
│ ├── utils
│ └── app.js
│
├── index.html
├── package.json
└── README.md


---

## Environment Variables (Backend)

Create a `.env` file inside `backend/`:



MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
PORT=5000


---

## Running Locally

# Backend
cd backend
npm install
npm run dev

# Frontend (from project root)
npm install
npm start