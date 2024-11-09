const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

// Display form
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/register.html'));
});

// form submission
router.post('/', (req, res) => {
    const { username, password } = req.body;
    const csvLine = `${username},${password}\n`;

    // Save to CSV
    fs.appendFile(path.join(__dirname, '../data/users.csv'), csvLine, (err) => {
        if (err) {
            console.error(err);
            return res.status(500).send('Error saving data');
        }
        res.send('Registration successful!');
    });
});

module.exports = router;
