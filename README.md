# MERN Stack Product Management System

A full-stack web application built using the MERN (MongoDB, Express.js, React.js, Node.js) stack that implements CRUD operations for product management with light/dark mode support.

## Features

- Create, Read, Update, and Delete products
- Responsive design for all screen sizes
- Light and Dark mode theme switching
- Real-time updates using React state management with Zustand
- RESTful API backend
- MongoDB database integration

## Tech Stack

- **Frontend:**
  - React.js
  - Zustand (State Management)
  - Chakra UI (Styling)

- **Backend:**
  - Node.js
  - Express.js
  - MongoDB with Mongoose

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v16.20.1 or higher)
- MongoDB
- npm (Node Package Manager)

## Environment Variables

Create a `.env` file in the root directory and add:

```env
MONGODB_URI=your_mongodb_connection_string
PORT=5000
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/anujkkarmakar/MERN_Basics
cd mern-stack-basics
```

2. Install server dependencies:
```bash
npm install
```

3. Install client dependencies:
```bash
cd frontend
npm install
```

## Available Scripts

In the project directory, you can run:

### Development Mode
```bash
npm run dev
```
Runs the backend server in development mode using nodemon.

### Production Mode
```bash
npm start
```
Runs the backend server in production mode.

### Build
```bash
npm run build
```
Installs all dependencies and builds the frontend application.

## API Endpoints

### Products

- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get a specific product
- `POST /api/products` - Create a new product
- `PUT /api/products/:id` - Update a product
- `DELETE /api/products/:id` - Delete a product

## Project Structure

```
mern-stack-basics/
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── controllers/
│   │   └── product.controller.js
│   ├── models/
│   │   └── product.model.js
│   ├── routes/
│   │   └── products.route.js
│   └── server.js
├── frontend/
│   ├── public/
│   │   └── vite.svg
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   └── ProductCard.jsx
│   │   ├── pages/
│   │   │   ├── CreatePage.jsx
│   │   │   └── HomePage.jsx
│   │   ├── store/
│   │   │   └── product.js
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .env
│   ├── .gitignore
│   ├── eslint.config.js
│   ├── index.html
│   ├── package.json
│   ├── package-lock.json
│   ├── README.md
│   └── vite.config.js
├── .env
├── .gitignore
├── LICENSE
├── package.json
├── package-lock.json
└── README.md
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License - see the package.json file for details.