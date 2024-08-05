const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const connectDB = require('./config/db');
const app = express();

connectDB();

app.use(cors());
app.use(express.json());

app.listen(5000, () => {
    console.log('Server running on port 5000');
});
