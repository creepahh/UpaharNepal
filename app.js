const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('views'));

// Routes
app.use('/register', require('./routes/register'));
app.use('/login', require('./routes/login'));

// Start server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
