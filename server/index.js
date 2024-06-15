// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3001;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routes
const recipeRoutes = require('./routes/recipe.routes');
const userRoutes = require('./routes/user.routes'); // Pastikan path ini sesuai dengan struktur di dalam user.routes.js

// Use routes
app.use('/api/recipes', recipeRoutes);
app.use('/api/users', userRoutes);

// Serve uploaded images
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Start server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
