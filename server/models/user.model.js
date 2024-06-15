const mysql = require('mysql');
const bcrypt = require('bcryptjs'); // Untuk hashing password

const db = mysql.createPool({
  connectionLimit: 10,
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'root',
  password: process.env.DB_PASSWORD || '',
  database: process.env.DB_NAME || 'codenine'
});

const User = {};

User.create = ({ username, email, password, role }, result) => {
  bcrypt.hash(password, 10, (err, hashedPassword) => {
    if (err) {
      console.error('Error hashing password:', err);
      return result(err, null);
    }

    db.query(
      'INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)',
      [username, email, hashedPassword, role],
      (err, res) => {
        if (err) {
          console.error('Error creating user:', err);
          return result(err, null);
        }

        console.log('Created user:', { id: res.insertId, username, email, role });
        result(null, { id: res.insertId, username, email, role });
      }
    );
  });
};

User.findByEmail = (email, result) => {
  db.query('SELECT * FROM users WHERE email = ?', email, (err, res) => {
    if (err) {
      console.error('Error finding user by email:', err);
      return result(err, null);
    }

    if (res.length) {
      result(null, res[0]);
    } else {
      result({ message: 'User not found.' }, null);
    }
  });
};

module.exports = User;
