
const mysql = require('mysql2');

const db = mysql.createConnection({
    host: '127.0.0.1',
    user: 'attendease_user',
    password: 'hamza1507',
    database: 'attendease',
    port: 3306
});

db.connect((err) => {
    if (err) {
        console.error('Database connection failed:', err.message);
        return;
    }

    console.log('AttendEase MySQL database connected!');
});

module.exports = db;