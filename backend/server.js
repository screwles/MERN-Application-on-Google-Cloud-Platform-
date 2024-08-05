const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

// Load environment variables
dotenv.config();

// Verify environment variable
console.log('Mongo URI:', process.env.MONGO_URI);

// Connect to database
connectDB();

const app = express();

// Init Middleware
app.use(cors());
app.use(express.json());

// Define Routes
app.use('/api/twitter', require('./routes/twitter'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
