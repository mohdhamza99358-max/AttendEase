const express = require('express');

const app = express();

const PORT = 5000;

// Test routecd
app.get('/', (req, res) => {
    res.send('Welcome to AttendEase Backend!');
});

// Start server
app.listen(PORT, () => {
    console.log(`AttendEase server running on port ${PORT}`);
});