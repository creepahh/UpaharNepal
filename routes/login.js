const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

// Display  form
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/login.html'));
});

// form submission
router.post('/', (req, res) => {
    const { username, password } = req.body;
    const data = fs.readFileSync(path.join(__dirname, '../data/users.csv'), 'utf-8');
    const users = data.split('\n').map(line => {
        const [user, pass] = line.split(',');
        return { username: user, password: pass };
    });

    const user = users.find(u => u.username === username && u.password === password);
    if (user) {
        res.send('Login successful!');
    } else {
        res.send('Invalid credentials');
    }
});

module.exports = router;
