const User = require('../models/user.model');
const bcrypt = require('bcryptjs');

exports.signup = (req, res) => {
  const { username, email, password, role } = req.body;

  User.create({ username, email, password, role }, (err, user) => {
    if (err) {
      return res.status(500).json({ message: err.message || 'Some error occurred while creating the user.' });
    }

    res.status(200).json({ message: 'User registered successfully.', user });
  });
};

exports.login = (req, res) => {
  const { email, password } = req.body;

  User.findByEmail(email, (err, user) => {
    if (err) {
      return res.status(500).json({ message: err.message || 'Some error occurred while finding the user.' });
    }

    if (!user) {
      return res.status(404).json({ message: 'User not found.' });
    }

    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        return res.status(500).json({ message: err.message || 'Some error occurred while comparing passwords.' });
      }

      if (isMatch) {
        res.status(200).json({ message: 'Login successful.', user });
      } else {
        res.status(401).json({ message: 'Invalid credentials.' });
      }
    });
  });
};
